import React,{useContext, useEffect} from 'react';
import ShowsContext from '../context/shows/showsContext'
import {useParams} from 'react-router-dom'

//Components
import Loader from "../components/Loader";

const Singlepage = () => {

    const { getSingleShow, singleShow } = useContext(ShowsContext);
  const {id} = useParams()
    useEffect(() => {
      getSingleShow(id);
      console.log(id)
  
      // eslint-disable-next-line
    }, []);
  
    const removeTags = (text) => {
      if (text === null || text === "") {
        return false;
      } else {
        text = text.toString();
      }
      return text.replace(/(<([^>]+)>)/gi, "");
    };
    return(
        <>
        {!singleShow ? (
       <Loader/>
        ) : (
          <div className="singleshow">
            <img
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              alt={singleShow.name}
            />
            <div className="singleshow__info">
              <h1>{singleShow.name}</h1>
              {singleShow.genres &&
                singleShow.genres.map((genre) => (
                  <span key={genre} className="singleshow__genre">
                    {genre}
                  </span>
                ))}
              <p>
                <strong>Status:</strong> {singleShow.status && singleShow.status}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {singleShow.rating ? singleShow.rating.average : "No rating"}
              </p>
              <p>
                <strong>Offical Site:</strong>{" "}
                {singleShow.officalSite ? (
                  <a
                    href={singleShow.officalSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {singleShow.officalSite}
                  </a>
                ) : (
                  "No offical site"
                )}
              </p>
              <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            </div>
          </div>
        )}
      </>
  )}
    

   


export default Singlepage;