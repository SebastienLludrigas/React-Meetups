import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'; 

function NewMeetupsPage() {
  const history = useHistory();

  async function addMeetupHandler(meetupData) {
    try {
      await fetch(
        'https://react-meetups-df30a-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: { 'Content-Type': 'application/json' }
        }
      );
      history.replace('/');

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
};

export default NewMeetupsPage;