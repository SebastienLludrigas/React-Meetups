import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      async function fetchData() {
        const response = await fetch('https://react-meetups-df30a-default-rtdb.firebaseio.com/meetups.json');
        const data = await response.json();
        
        // console.log(data);

        const meetups = [];
        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key]
          });
        };

        // console.log(meetups)
        setIsLoading(false);
        setLoadedMeetups(meetups);
      };

      fetchData();
    } catch (err) {
      console.log(err); 
    };
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  };

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
};

export default AllMeetupsPage;