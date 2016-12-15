var cards = [
'<img src="animal-kingdom-01.jpg">',
'<img src="animal-kingdom-04.jpg">',
'<img src="animal-kingdom-06.jpg">',
'<img src="animal-kingdom-07.jpg">',
'<img src="animal-kingdom-14.jpg">',
'<img src="animal-kingdom.jpg">'
];

function shuffleDeck(){
	for(let i = 0; i<10000; i++){
		var random1 = Math.floor(Math.random() * theDeck.length);
		var random2 = Math.floor(Math.random() * theDeck.length);
		var temp = theDeck[random1];
		theDeck[random1] = theDeck[random2];
		theDeck[random2] = temp;
	}};


// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 12;
	var mgHTML = '';
	var card = ''
	var cardLocation = [];
	// push numbers into array as many as gridsize
	for(let i=0; i<gridSize; i++){
		cardLocation.push([i]);
	}

	for(let i=0; i<9000; i++){
		var random1 = Math.floor(Math.random() * cardLocation.length);
		var random2 = Math.floor(Math.random() * cardLocation.length);
		var temp = cardLocation[random1];
		cardLocation[random1] = cardLocation[random2];
		cardLocation[random2] = temp;
	}

	for(let i=0; i<gridSize; i++){
		card = cards[Math.floor(cardLocation[i]/2)];
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);
    var canClick = true;

    if(canClick){
    		$('.mg-tile-inner').click(function(){
    			canClick = false;

 		   	$(this).toggleClass('flip');
    		var cardsUp = $('.flip')
    		if(cardsUp.length == 2){
    			// check to see if they are the same
    			var cardsUpImages = cardsUp.find('.mg-front img')
				if(cardsUpImages[0].src == cardsUpImages[1].src){
    				// this is a match!
    				cardsUp.addClass('matched');
    				cardsUp.removeClass('flip');
    			}else{	

    				setTimeout(function(){
    					cardsUp.removeClass('flip');
    					canClick = true;
    				}, 400)
    			// the user flipped 2 cards, they dont match, flip them back
    			}
    		}else{
    		// do nothing
    		}
   	 	})
    };
});

