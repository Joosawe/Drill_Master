import EquipmentItem from './EquipmentItem';
import classes from './ExpertTipsList.module.css';

function EquipmentList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <EquipmentItem
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

export default EquipmentList;