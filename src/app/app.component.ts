import { Component, OnInit, VERSION } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Prenotazione v.1";
  angForm: FormGroup;
  patternCellulare = "^(([+]|00)39)[ ]?((3[1-6][0-9]))([0-9]{7})$";
  patternCodiceFiscale =
    "/^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i";
  isValidFormSubmitted = null;

  constructor(private formBuilder: FormBuilder) {
    this.angForm = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.maxLength(100)]],
      cognome: ["", [Validators.required, Validators.maxLength(100)]],
      data: ["", [Validators.required]],
      codicefiscale: [
        "",
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          Validators.pattern(this.patternCodiceFiscale)
        ]
      ],
      cellulare: [
        "",
        [Validators.required, Validators.pattern(this.patternCellulare)]
      ],
      email: ["", [Validators.required]]
    });
  }

  onSubmit() {
    if (!this.angForm.valid) return;

    alert("hello");
  }

  ngOnInit() {}
}
