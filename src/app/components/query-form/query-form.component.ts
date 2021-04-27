import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/services/can-deactive-guard.service';
import { setQueryEntity, setQueryPrice } from 'src/app/store/app.actions';
import { State } from 'src/app/store/app.selector';
import { passwordMatching } from '../../services/password-matching.service';
import { validSkill } from '../../services/valid-skill.service';

@Component({
  selector: 'app-aquery-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss'],
})
export class QueryFormComponent implements OnInit, CanComponentDeactivate {
  queryForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.queryForm = this.fb.group(
      {
        entity: ['', Validators.required],
        price: ['', [Validators.required, Validators.minLength(3)]],
        skills: this.fb.array([]),
      },
      { validators: passwordMatching }
    );
  }

  get entityControl(): FormControl {
    return this.queryForm.get('entity') as FormControl;
  }

  get priceControl(): FormControl {
    return this.queryForm.get('price') as FormControl;
  }

  get skillsControl(): FormArray {
    return this.queryForm.get('skills') as FormArray;
  }

  addSkill(): void {
    const newSkill: FormGroup = this.fb.group({
      tech: ['', [Validators.required, validSkill]],
      exp: [null, Validators.required],
    });
    this.skillsControl.push(newSkill);
  }

  removeSkill(pos: number): void {
    this.skillsControl.removeAt(pos);
  }

  onSubmit(): void {
    this.store.dispatch(setQueryEntity(this.entityControl.value));
    this.store.dispatch(setQueryPrice(this.priceControl.value));
    this.skillsControl.clear();
    this.queryForm.reset();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.queryForm.touched) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
