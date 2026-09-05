var SPREADSHEET_ID_AND_TAB =
	'1l08Sdxv8DRXcq9InKoGzVIIGw-yL3_teI-2C1wcHK6s/posted';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;
				let requestIndex = $(
					`<span><p  data-filter-type="` +
						entry.date +
						`">&#91;` +
						entry.date +
						`&#93;</p>
						<p data-filter-type="` +
						entry.user +
						`">&#60;` +
						entry.user +
						`&#62;</p>
						<p data-filter-type="` +
						entry.request +
						`">` +
						entry.request +
						`</p></span><div><a target="_blank" href="` +
						entry.link +
						`" data-filter-type="` +
						entry.link +
						`">` +
						entry.title +
						` | ` +
						entry.artist +
						` | ` +
						entry.year +
						` | ` +
						entry.album +
						`</a></div>`,
				).appendTo('#requestIndex');
			});
		},
	);
});
