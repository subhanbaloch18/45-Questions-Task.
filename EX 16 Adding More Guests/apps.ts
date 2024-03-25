//  EXERCISE 16 (ADDING MORE GUESTS).

let guest_list : string [] = ['Raza','Misbah','Hamail','Qadeer'];
guest_list.unshift('Manahil','Awais','Sameer');
for(let i=0; i<guest_list.length; i++){
   console.log('Most Respected Sir/Madam ' + guest_list[i] + ',\nI invited you for dinner at my house tommorow night. I found a bigger table so I decided to invite 3 more guests.\nThank You\n')
 }