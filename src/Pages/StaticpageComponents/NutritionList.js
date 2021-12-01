import NutritionItem from './NutritionItem';
import classes from './ExpertTipsList.module.css';

function NutritionList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <NutritionItem
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

export default NutritionList;