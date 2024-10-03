import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MorseService {
  private morseCode: string[] = [
    /* A */ '.-',
    /* B */ '-...',
    /* C */ '-.-.',
    /* D */ '-..',
    /* E */ '.',
    /* F */ '..-.',
    /* G */ '--.',
    /* H */ '....',
    /* I */ '..',
    /* J */ '.---',
    /* K */ '-.-',
    /* L */ '.-..',
    /* M */ '--',
    /* N */ '-.',
    /* O */ '---',
    /* P */ '.--.',
    /* Q */ '--.-',
    /* R */ '.-.',
    /* S */ '...',
    /* T */ '-',
    /* U */ '..-',
    /* V */ '...-',
    /* W */ '.--',
    /* X */ '-..-',
    /* Y */ '-.--',
    /* Z */ '--..',
  ];
  private alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  public encode(text: string): string {
    text = text.toUpperCase().trim().replace(/\s+/g, ' '); // Remove extra spaces and convert to uppercase
    let encoded = '';

    for (let i = 0; i < text.length; i++) {
      const char: string = text[i];

      if (char === ' ') {
        encoded += '/ ';
      }
      else {
        const index = this.alphabet.indexOf(char);

        if (index !== -1) {
          encoded += this.morseCode[index] + ' ';
        }
      }
    }

    return encoded.trim();
  }

  public decode (morse: string): string {
    morse = morse.trim().replace(/\s{3,}/g, ' '); // Remove extra spaces
    let decoded = '';
    const words = morse.split(' / ');

    for (let i = 0; i < words.length; i++) {
      const letters = words[i].split(' ');

      for (const letter of letters) {
        const index = this.morseCode.indexOf(letter);

        if (index !== -1) {
          decoded += this.alphabet[index];
        }
        else {
          throw new Error(`Invalid Morse code sequence: "${letter}"`);
        }
      }

      if (i < words.length - 1) {
        decoded += ' ';
      }
    }

    return decoded.trim();
  }

  constructor() { }
}
