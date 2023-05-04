import React from 'react';
import { useParams } from 'react-router-dom';

const GhostPage: React.FC = ({ ghosts }) => {
  const { id } = useParams();
  return <div>{ghosts.map((el) => el.id == id && <div>{el.name}</div>)}</div>;
};
export default GhostPage;
