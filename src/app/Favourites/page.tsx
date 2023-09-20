'use client'



export default function FavItems(){
    
    let FavouriteItems=[{name:"Ramya",}];
    
    
    return(
      <ul>
       {
        <li>
          {FavouriteItems[0].name}
        </li>
       }
      </ul>
    )
}