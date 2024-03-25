// EXERCISE 15 (CHANGING GUEST LIST).

let guest_list : string [] = ['Raza','Misbah','Hamail','Qadeer'];
let not_present : string = 'Misbah';
let new_guest : string = 'Mustafa';
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Most Respected Sir/Madam ' + guest_list[i] + ',\nI invited you for dinner at my house tommorow night.\nThank You\n')
}