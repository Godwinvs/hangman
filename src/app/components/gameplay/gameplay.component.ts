import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Round } from 'src/app/Classes/Round';
import { GameConfig, Result, Vals } from 'src/app/enums/config';
import { GameRoundService } from 'src/app/services/game-round.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ResultModalComponent } from './result-modal/result-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss'],
})
export class GameplayComponent implements OnInit {
  pressedKey = '';
  panelMsgType = -1;
  Round = 1;
  Score = 0;
  interval: any = undefined;
  guessBlinker: string = Vals.NORMAL;
  errorBlinker: string = Vals.NORMAL;
  constructor(
    private gameRound: GameRoundService,
    private router: Router,
    private theme: ThemeService,
    private dialog: MatDialog
  ) {
    this.initialize();
  }

  ngOnInit(): void {}
  get isDarkMode() {
    return this.theme.isDarkMode;
  }

  get round(): Round {
    return this.gameRound.round;
  }
  get Lives() {
    return GameConfig.LIVES;
  }

  initialize(): void {
    this.gameRound.initialize();
    console.log(this.round.movieName);
    this.setPanelMsg(-1, '');
    this.activateTimer();
  }
  activateTimer() {
    this.interval = setInterval(() => {
      if (this.round.timeLeft > 0) {
        this.gameRound.decrementGameTime();
      } else {
        this.assignLost();
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    let key = event.key;
    let code = key.charCodeAt(0);
    if (!((code >= 97 && code <= 122) || (code >= 48 && code <= 57))) return;
    if (!this.round.LOST && !this.round.WIN) this.process(key);
  }

  process(key: string) {
    if (this.round.movie.includes(key)) {
      this.blink('GUESSER', Vals.CORRECT);
      this.round.updateTemplate(key);
      this.setPanelMsg(Vals.CORRECT_MSG, key);
      this.checkWin();
    } else if (this.round.wrongBuffer.includes(key)) {
      this.blink('ERROR_BUFFER', Vals.ERROR);
      this.setPanelMsg(Vals.ERRORLIST_MSG, key);
    } else {
      this.blink('GUESSER', Vals.ERROR);
      this.round.wrongBuffer.push(key);
      this.setPanelMsg(Vals.INCORRECT_MSG, key);
      this.round.lives--;
      if (this.round.lives === 0) {
        this.assignLost();
      }
    }
  }

  setPanelMsg(type: any, value: string) {
    this.pressedKey = value;
    this.panelMsgType = type;
  }
  checkWin() {
    if (!this.round.template.includes('-')) {
      this.round.WIN = true;
      this.stopTimer();
      this.showModal();
    }
  }

  assignLost() {
    this.stopTimer();
    this.round.LOST = true;
    this.showModal();
  }
  goToNextRound() {
    this.Round += 1;
    this.Score += 10 + Math.round((this.round.timeLeft * this.Round) / 2);
    this.initialize();
  }

  blink(entity: string, blinker: string) {
    switch (entity) {
      case 'GUESSER':
        this.guessBlinker = blinker;
        setTimeout(
          () => (this.guessBlinker = this.isDarkMode ? Vals.WHITE : Vals.BLACK),
          Vals.BLINK_TIMER
        );
        break;
      case 'ERROR_BUFFER':
        this.errorBlinker = blinker;
        setTimeout(
          () => (this.errorBlinker = this.isDarkMode ? Vals.WHITE : Vals.BLACK),
          Vals.BLINK_TIMER
        );
        break;
    }
  }
  showModal() {
    //this.dialog.showModal(this.round.WIN, this.round.movieName);
    let dialogRef = this.dialog.open(ResultModalComponent, {
      width: '250px',
      data: {
        round: this.Round,
        name: this.round.movieName,
        isWin: this.round.WIN,
        score: this.Score,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed');
    });
  }
  resultHandler(result: string) {
    console.log(result);
    if (result == Result.PASSED) this.goToNextRound();
    else {
      this.router.navigate(['/']);
    }
  }
}
