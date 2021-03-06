exports.formatPrice = (price = 0) => {
	if (isNaN(parseInt(price))) return '0';
	return new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'VND',
	}).format(price);
};

// format number, ex: 1000 => 1.000
exports.numberWithCommas = (num = 0) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// fn: format date
exports.formatDate = (date = new Date().getTime()) => {
	const d = new Date(date);
	const y = d.getFullYear(),
		m = ('0' + (d.getMonth() + 1).toString()).slice(-2),
		day = ('0' + d.getDate().toString()).slice(-2);

	return `${day}-${m}-${y}`;
};

exports.formatFullDate = (date = new Date().getTime()) => {
	const d = new Date(date);

	const y = d.getFullYear(),
		m = ('0' + (d.getMonth() + 1).toString()).slice(-2),
		day = ('0' + d.getDate().toString()).slice(-2),
		h = ('0' + d.getHours().toString()).slice(-2),
		min = ('0' + d.getMinutes().toString()).slice(-2),
		sec = ('0' + d.getSeconds().toString()).slice(-2);

	return `${day}-${m}-${y} ${h}:${min}:${sec}`;
};

exports.strToTime = (str) => {
	let d = str.split(' ')[0],
		t = str.split(' ')[1];
	d = d.split('-');
	t = t.split(':');
	return new Date(d[2], d[1] - 1, d[0], t[0], t[1], t[2]);
};

// convert dia diem hoc tu number to string
exports.convertStudyPlace = (place = 0) => {
	switch (place) {
		case 0:
			return '227 NVC Quận 5';
		case 1:
			return '137E Nguyễn Chí Thanh';
		case 2:
			return 'Online';
		default:
			return '227 NVC Quận 5';
	}
};
