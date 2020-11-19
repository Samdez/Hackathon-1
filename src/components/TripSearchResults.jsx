const TripSearchResults = () => {
  return ( 
    {tripList.map(tripListItem => {
      const link = tripListItem.link
      const idIndex = link.indexOf('&') + 4;
      const id = link.slice(idIndex)
      return <p key={id}>{id}</p>
    })}
   );
}
 
export default TripSearchResults;