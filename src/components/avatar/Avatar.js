import './avatar.css';

const Avatar = ({ name }) => {
  return (
    <div class='avatar-circle'>
      <span class='initials text-uppercase'>{name[0]}</span>
    </div>
  );
};

export { Avatar };
