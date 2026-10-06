import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback', standalone: true, imports: [ReactiveFormsModule],
  template: `<section class="section grey"><div class="wrap two">
    <div><h2>Your Feedback Matters</h2><h3>Help Us Improve</h3><p>Feedback helps us improve patient, academic and institutional services.</p>
      <ul class="stats"><li>Patient Care</li><li>Academic Services</li><li>Hospital Services</li></ul></div>
    <form [formGroup]="f" (ngSubmit)="submit()" novalidate>
      @if (done()) { <p class="ok" role="status">Thank you. Your feedback was recorded (demo only, nothing was sent).</p> }
      <label>Name<input formControlName="name"></label>@if (bad('name')) { <small class="err">Name is required.</small> }
      <label>Email<input type="email" formControlName="email"></label>@if (bad('email')) { <small class="err">Enter a valid email address.</small> }
      <label>Mobile Number<input inputmode="numeric" formControlName="mobile"></label>@if (bad('mobile')) { <small class="err">Enter a 10-digit mobile number.</small> }
      <label>Category<select formControlName="category"><option value="">Select</option>@for (c of cats; track c) { <option>{{ c }}</option> }</select></label>@if (bad('category')) { <small class="err">Select a category.</small> }
      <fieldset><legend>Rating</legend>@for (s of [1,2,3,4,5]; track s) { <button type="button" class="star" [class.on]="s <= f.controls.rating.value" [attr.aria-label]="s + ' star'" (click)="f.controls.rating.setValue(s)">★</button> }</fieldset>
      <label>Message<textarea rows="4" formControlName="message"></textarea></label>@if (bad('message')) { <small class="err">Message must be at least 20 characters.</small> }
      <label class="chk"><input type="checkbox" formControlName="agree"> I agree to the terms and conditions.</label>@if (bad('agree')) { <small class="err">You must accept the terms.</small> }
      <button class="btn" type="submit">Submit Feedback</button></form></div></section>`
})
export class FeedbackComponent {
  cats = ['Hospital', 'Academics', 'Website', 'Administration', 'Other']; done = signal(false);
  f = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required], email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]], category: ['', Validators.required],
    rating: [0], message: ['', [Validators.required, Validators.minLength(20)]], agree: [false, Validators.requiredTrue]
  });
  bad(k: 'name' | 'email' | 'mobile' | 'category' | 'message' | 'agree') { const c = this.f.controls[k]; return c.invalid && c.touched; }
  submit() { this.f.markAllAsTouched(); if (this.f.valid) { this.done.set(true); this.f.reset(); } }
}
