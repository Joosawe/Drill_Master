import ExpertTipsItem from './ExpertTipsItem';
import classes from './ExpertTipsList.module.css';

function ExpertTipsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <ExpertTipsItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default ExpertTipsList;