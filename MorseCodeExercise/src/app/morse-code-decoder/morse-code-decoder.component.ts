import { Component, signal } from '@angular/core';
import { MorseService } from '../morse.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-morse-code-decoder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './morse-code-decoder.component.html',
  styleUrl: './morse-code-decoder.component.css'
})
export class MorseCodeDecoderComponent {
  morseCode = signal<string>('');
  plainText = signal<string>('');
  errorMessage = signal<string>('');

  constructor(private morseService: MorseService) {  }

  public decodeText(): void {
    this.errorMessage.set('');
    try {
      this.plainText.set(this.morseService.decode(this.morseCode()));
    }
    catch (error) {
      this.errorMessage.set((error as Error).message);
      this.plainText.set('');
    }

  }

  public isDecodeButtonDisabled(): boolean {
    return this.morseCode().trim().length === 0 || !/^[/. -]+$/.test(this.morseCode());
  }
}
