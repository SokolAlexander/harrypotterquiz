import { Button, TextField } from '@material-ui/core';
import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import './Main.css';
import { useMemo } from 'react';
import { routeParams, answers } from '../constants';
import { useEffect } from 'react';
import { usePrevious } from '../utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { questId } = useParams();
  const prevQuestId = usePrevious(questId);

  const currentPage = useMemo(() => routeParams.findIndex(el => el === questId), [questId]);

  const [value, setValue] = useState('');
  const [showLink, setShowLink] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleAnswer = useCallback(() => {
    if (value.toLowerCase() === answers[currentPage]) {
      setShowLink(true);
    } else {
      setError(true);
    }
  }, [value, currentPage]);

  useEffect(() => {
    if (questId !== prevQuestId) {
      setShowLink(false);
      setError(false);
    }
  }, [questId, prevQuestId]);

  return (
    <div className="wrapper">
      <span>Question</span>
      <TextField value={value} onChange={handleChange} label="Answer" />
      {error && <span>Nope</span>}
      <Button variant="contained" onClick={handleAnswer}>Answer</Button>
      {showLink && <Link to={`/${routeParams[currentPage + 1]}`}>Go Forward</Link>}
    </div>
  )
}