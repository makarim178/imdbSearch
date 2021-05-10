import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './pageSection.scss'


const PageSection = ({totalPages, searchMovies, searchText, currentPage}) => {

    const [pageArray, setPageArray] = useState([]);    
    const [backPage, setBackPage] = useState();
    const [forwardPage, setForwardPage] = useState();
    const [selectedPage, setSelectedPage] = useState("1");

    const setUpPageArray = (pageSelected) => {

        setSelectedPage(pageSelected)
    
          let pageRemainder = parseInt(pageSelected)%10;
          
          let pageStart = Math.floor(pageSelected/10)*10 + 1 ;
          let pageEnd = pageStart + 9;

          
          if(parseInt(pageSelected) - 10 > 0) {
              setBackPage(Math.floor(parseInt(pageSelected)/10)*10 );
            }  else {
                setBackPage("0");
            }
        
            

          if(parseInt(pageSelected) + 10 < parseInt(totalPages) ) {
              

                  let floorVal = (Math.floor(parseInt(pageSelected) / 10) * 10) +11 ;
                  setForwardPage(floorVal);
                  
              
          } else {
              setForwardPage(totalPages);
          }
          
          if(pageEnd > totalPages) pageEnd = totalPages;
          var i;
          const pageArr = [];

          for(i = pageStart; i<= pageEnd; i++) {


            const pageSelected = (currentPage === i) ? true : false
            const pages = {
              id: i,
              pageNumber: i,
              pageStatus: pageSelected
            }
            pageArr.push(pages);
          }
          
          setPageArray(pageArr);
         
        
      }

      const actionPageNo = (pgNo) => {
        setUpPageArray(pgNo);
        searchMovies(searchText, pgNo);
      }

    useEffect(() => {
        setBackPage("0");
        setForwardPage("11");
       setUpPageArray(parseInt("1"));
    }, [currentPage, totalPages])

    return (
        <> 
            <div className="pageContainer">  

            
                {
                    parseInt(backPage) > 0 && 
                    
                    <div className="pgCard" onClick={() => actionPageNo(backPage)} >
                            <ArrowBackIosIcon />
                    </div>          
                }

            {
                pageArray.length > 0 && pageArray.map((data) => (
                    <div className={selectedPage === data.pageNumber ? "pgCard pgActive" : "pgCard"} key={data.id} >
                        <span onClick={() => actionPageNo(data.pageNumber)}>{data.pageNumber}</span>    
                    </div>
                ))
            }
            {
                parseInt(totalPages) !== parseInt(forwardPage) && 
                
                <div className="pgCard" onClick={() => actionPageNo(forwardPage)} >
                    <ArrowForwardIosIcon />
                    
                </div>
            }


            </div>
            <div className="pageDesc">
                <div className="totPage">
            <span>Total pages: {totalPages}</span>

                </div>
                <div className="currPage">
            <span>Current page: {selectedPage}</span>

                </div>
            </div>
        </>
    )
}

export default PageSection
