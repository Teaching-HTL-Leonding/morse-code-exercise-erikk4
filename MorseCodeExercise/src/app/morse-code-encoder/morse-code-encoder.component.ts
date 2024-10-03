import { Component, signal } from '@angular/core';
import { MorseService } from '../morse.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-morse-code-encoder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './morse-code-encoder.component.html',
  styleUrl: './morse-code-encoder.component.css'
})
export class MorseCodeEncoderComponent {
  plainText = signal<string>('');
  morseCode = signal<string>('');

  constructor(private morseService: MorseService) {  }

  public encodeText(): void {
    this.morseCode.set(this.morseService.encode(this.plainText()));
  }

  // This button must be disabled if the text to encode is empty or contains any other characters than A-Z and blanks separating words.
  // make it with simpler regex
  public isEncodeButtonDisabled(): boolean {
    return this.plainText().trim().length === 0 || !/^[A-Z ]+$/.test(this.plainText());
  }
}
