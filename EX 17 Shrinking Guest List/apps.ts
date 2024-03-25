// EXERCISE 17 (SHRINKING GUEST LIST).

let guest_list : string [] = ['Raza','Misbah','Hamail','Qadeer'];
console.log('\nunfortunately I cannot arranged a big table , so incase Only Two persons can join.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Sir/Madam ${remove_guest} You are not ivited for dinner tommorow night.`);
}