var state = {
	items: []
};

var addItem = function(state, item) {
	state.items.push(item);
};

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + '<span class="shopping-item">' + item + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</div>' + '</li>'
	});
	element.html(itemsHTML);
};

$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderList(state, $('.shopping-list'));
});

$('.shopping-list').on('click', '.shopping-item-toggle', function() {
	$(this).parent().parent().closest('.shopping-item').addClass( 'shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', function() {
	$(this).parent('div').parent('li').remove();
});