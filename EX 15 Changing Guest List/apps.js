// EXERCISE 15 (CHANGING GUEST LIST).
var guest_list = ['Raza', 'Misbah', 'Hamail', 'Qadeer'];
var not_present = 'Misbah';
var new_guest = 'Mustafa';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Most Respected Sir/Madam ' + guest_list[i] + ',\nI invited you for dinner at my house tommorow night.\nThank You\n');
}
