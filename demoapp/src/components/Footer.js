import React from 'react' ;
import StickyFooter from 'react-sticky-footer';


class Footer extends React.Component {
    render(){
        return(
        <div>
        <StickyFooter
            bottomThreshold={20}
            normalStyles={{
            backgroundColor:"grey",
            padding: "2rem"
           }}
            stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem"
            }}
         >
         <br/>Contact Us 
         <br/>Email- nainagujar6@gmail.com
         <br/>Phone No - 48764209-74
         <br/>©All Rights Reseved 2019
        </StickyFooter>
         </div> 
        );
    }
}
export default Footer ;