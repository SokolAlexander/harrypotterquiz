import { useState, useCallback, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Main.css";
import { routeParams, answers, correct, questions, titles } from "../constants";
import { usePrevious } from "../utils";
import Button from "./Button";
import Modal from "./Modal";
import Fireworks from "./Fireworks";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { questId } = useParams();
  const prevQuestId = usePrevious(questId);

  const currentPage = useMemo(
    () => routeParams.findIndex((el) => el === questId),
    [questId]
  );

  const [value, setValue] = useState("");
  const [showLink, setShowLink] = useState(false);
  const [error, setError] = useState(false);
  const [rotation, setRotation] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleHB = useCallback(() => {
    setShowFireworks(true);
  }, []);

  const handleAnswer = useCallback(() => {
    if (value.toUpperCase() === answers[currentPage].toUpperCase()) {
      setShowLink(true);
      setError(false);
    } else {
      setRotation(true);
      setTimeout(() => {
        setError(true);
        setTimeout(() => {
          setRotation(false);
        }, 1100);
        setTimeout(() => {
          setRotation(true);
          setTimeout(() => {
            setError(false);
            setRotation(false);
          }, 1100);
        }, 2000);
      }, 500);
    }
  }, [value, currentPage]);

  useEffect(() => {
    if (questId !== prevQuestId) {
      setShowLink(false);
      setError(false);
      setValue("");
    }
  }, [questId, prevQuestId]);

  if (questId === routeParams[routeParams.length - 1]) {
    return (
      <>
        {showFireworks ? (
          <Fireworks />
        ) : (
          <Modal>
            <span className="question">
              Поздравляю! Все испытания пройдены, заслуженный подарочек ожидает
              тебя на балконе
            </span>
            <Button label="C днем рождения!" onClick={handleHB} />
          </Modal>
        )}
      </>
    );
  }
  return (
    <Modal>
      {!showLink && (
        <>
          <span className="title">{titles[currentPage]}</span>
          <span className="question">{questions[currentPage]}</span>
          <input
            className="input"
            placeholder="Answer"
            value={value}
            onChange={handleChange}
          />
        </>
      )}
      {!showLink && (
        <Button
          onClick={handleAnswer}
          label={error ? "Нет!" : "Ответить"}
          className={rotation ? "rotation" : ""}
        />
      )}
      {showLink && (
        <>
          <span className="error">{correct[currentPage]}</span>
          <Link to={`/quest/${routeParams[currentPage + 1]}`}>Go Forward</Link>
        </>
      )}
    </Modal>
  );
};
