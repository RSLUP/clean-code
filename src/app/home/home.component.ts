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
  myFG: FormGroup;
  x = new FormControl("", Validators.required);
  y = new FormControl("", Validators.required);
  result = "";

  constructor(private formBuilder: FormBuilder) {
    this.myFG = this.formBuilder.group({});

    this.myFG.addControl("x", this.x);
    this.myFG.addControl("y", this.y);
  }

  ngOnInit(): void {}

  myFunc() {
    this.result = this.x.value + this.y.value;
  }
}
