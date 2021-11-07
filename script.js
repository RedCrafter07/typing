const typing = {
	delete: function(speed, selector, bar, callback) {
		const text = $(selector).text();
		let sliceCount = text.length;
		let interval = setInterval(() => {
			if (sliceCount != 0) {
				let val = text.slice(0, sliceCount);
				sliceCount--;
				if (!bar) {
					$(selector).text(val);
				} else if (bar) {
					$(selector).text(val + '|');
				}
			} else if (sliceCount == 0) {
				$(selector).text('');
				clearInterval(interval);
				if (callback) {
					callback();
				}
			}
		}, speed);
	},
	type: function(text, speed, selector, bar, callback) {
		const letters = [ ...text ];
		let position = 0;
		let endstring = '';
		let int = setInterval(() => {
			let endstr;
			if (position != letters.length) {
				endstring += letters[position];
				position++;
				if (!bar) {
					endstr = endstring;
				} else if (bar) {
					endstr = endstring + '|';
				}
				$(selector).text(endstr);
			} else if (position == letters.length) {
				$(selector).text(endstring);
				clearInterval(int);
				if (callback) {
					callback();
				}
			}
		}, speed);
	}
};
