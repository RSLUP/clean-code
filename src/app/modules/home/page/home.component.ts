import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  calFormGroup: FormGroup;
  number1FormControl = new FormControl("", Validators.required);
  number2FormControl = new FormControl("", Validators.required);
  result = "";

  constructor(private formBuilder: FormBuilder) {
    this.calFormGroup = this.formBuilder.group({});

    this.calFormGroup.addControl("number1", this.number1FormControl);
    this.calFormGroup.addControl("number2", this.number2FormControl);
  }

  ngOnInit(): void {}

  calculateSum() {
    this.result = this.number1FormControl.value + this.number2FormControl.value;
  }
}
