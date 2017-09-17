
function tab () {
	var header = document.getElementsByClassName("header")[0];
	var col = header.getElementsByTagName("li");
	var posts = document.getElementsByClassName("posts")[0];
	var target = posts.getElementsByTagName("td");
	for (i = 0; i < 3; i++) {
		col[i].style.width = (target[i].clientWidth - 7) + "px";
	}
}

window.onload = tab;
window.onresize = tab;

function sort (x) {
	var tabl = document.getElementsByTagName("table")[0];
	var row = document.getElementsByTagName("tr");
	var add = [];
	for (r in row) {
		add[parseInt(r)] = {order: row[r].innerText, code: row[r].innerHTML};
	}
	if (x === 1) {
		tabl.innerHTML = "";
		var above = document.createElement("tr");
		above.innerHTML = add[0].code;
		tabl.appendChild(above);
		add.splice(0, 1);
		add.sort(function(a, b) {
		  var nameA = a.order.toUpperCase();
		  var nameB = b.order.toUpperCase();
		  if (nameA < nameB) {
			return -1;
		  }
		  if (nameA > nameB) {
			return 1;
		  }
		  return 0;
		});
		var son;
		for (i = 0; i < add.length; i++) {
			son = document.createElement("tr");
			son.innerHTML = add[i].code;
			tabl.appendChild(son);
		}
	} else if (x === 2) {
		var datesort = [];
		for (i = 0; i < add.length; i++) {
			datesort[i] = {order: add[i].order.split("	")[1], code: row[i].innerHTML};
		}
		datesort.sort(function(a, b) {
		  var nameA = a.order.toUpperCase();
		  var nameB = b.order.toUpperCase();
		  if (nameA < nameB) {
			return 1;
		  }
		  if (nameA > nameB) {
			return -1;
		  }
		  return 0;
		});
		tabl.innerHTML = "";
		var son;
		for (i = 0; i < add.length; i++) {
			son = document.createElement("tr");
			son.innerHTML = datesort[i].code;
			tabl.appendChild(son);
		}
	}
}
