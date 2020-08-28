import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Flop Voter';
  movies = {
    one: {
      img: 'https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'The Last Airbender',
      disabled: false,
      display: 'none'
    },
    two: {
      img: 'https://m.media-amazon.com/images/M/MV5BMTYzNDM0ODQxMF5BMl5BanBnXkFtZTcwOTMyMzMzMg@@._V1_.jpg',
      title: 'Dragonball Evolution',
      disabled: false,
      display: 'none'
    },
    three: {
      img: 'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
      title: 'Batman & Robin',
      disabled: false,
      display: 'none'
    },
    four: {
      img: 'https://m.media-amazon.com/images/M/MV5BY2JhYjUzYzAtMWFhMi00YzIyLTllZGQtMTAzNThkNTJhNTBmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
      title: 'Street Fighter',
      disabled: false,
      display: 'none'
    }
  }
  onVoteClick(event) {
    console.log(event.target);
    if (event.target.innerText === 'Unvote') {
      event.target.innerText = 'Vote';
      for (const movie in this.movies) {
        this.movies[movie].disabled = false;
        if(event.target.id === movie) {
          this.movies[movie].display = 'none';
        }
      }
      return;
    }
    for (const movie in this.movies) {
      if (event.target.id !== movie) {
        this.movies[movie].disabled = true;
      }
      if (event.target.id === movie) {
        this.movies[movie].display = 'block';
        event.target.innerText = 'Unvote';
      }
    }
  }
}
