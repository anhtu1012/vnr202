import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import {
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaHome,
  FaMedal,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Squares from "../../components/Squares";
import { LeaderboardEntryServices } from "../../services/api";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer (0-3)
  explanation: string;
  building: string; // What building/upgrade this unlocks
}

interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
  time: number; // Time taken in seconds
}

const questions: Question[] = [
  {
    id: 1,
    question: "Công nghiệp hóa, hiện đại hóa là quá trình:",
    options: [
      "Chuyển đổi toàn diện, căn bản mọi lĩnh vực kinh tế - xã hội bằng việc ứng dụng khoa học kỹ thuật hiện đại",
      "Thay thế toàn bộ lao động thủ công bằng máy móc nhập khẩu",
      "Phát triển công nghiệp nặng làm trung tâm",
      "Tập trung phát triển nông nghiệp là chủ yếu",
    ],
    correctAnswer: 0,
    explanation:
      "Công nghiệp hóa, hiện đại hóa (CNH, HĐH) là một quá trình mang tính căn bản và toàn diện. Phương án B mô tả đúng nhất bản chất này: thay đổi mọi lĩnh vực (kinh tế, xã hội, văn hóa...) bằng cách áp dụng khoa học kỹ thuật hiện đại",
    building: "Nhà máy đầu tiên",
  },
  {
    id: 2,
    question: "Kinh tế tri thức được hiểu là:",
    options: [
      "Nền kinh tế dựa chủ yếu vào tài nguyên thiên nhiên",
      "Nền kinh tế trong đó tri thức là yếu tố quyết định, nguồn lực chủ yếu tạo ra của cải vật chất",
      "Nền kinh tế chỉ chú trọng công nghệ thông tin",
      "Nền kinh tế dựa vào lao động thủ công",
    ],
    correctAnswer: 1,
    explanation:
      "Định nghĩa cốt lõi của 'kinh tế tri thức' (KTTT) chính là nền kinh tế trong đó tri thức (thông qua công nghệ, sáng tạo, đổi mới) trở thành nguồn lực sản xuất chủ yếu và là yếu tố quyết định tạo ra giá trị, vượt qua các yếu tố truyền thống như tài nguyên hay lao động thủ công ",
    building: "Trường học",
  },
  {
    id: 3,
    question:
      "Mối quan hệ giữa công nghiệp hóa, hiện đại hóa và kinh tế tri thức là:",
    options: [
      "Hai quá trình tách biệt, không liên quan",
      "CNH, HĐH là nền tảng vật chất; KTTT là động lực thúc đẩy và định hướng phát triển",
      "KTTT là kết quả của CNH, HĐH nhưng không tác động ngược lại",
      "CNH, HĐH quan trọng hơn KTTT",
    ],
    correctAnswer: 1,
    explanation:
      "CNH, HĐH tạo nền tảng vật chất, còn KTTT là động lực thúc đẩy phát triển.",
    building: "Viện nghiên cứu",
  },
  {
    id: 4,
    question:
      "Theo C. Mác và Ph. Ăng-ghen, yếu tố nào sẽ trở thành lực lượng sản xuất trực tiếp?",
    options: ["Tư bản", "Tri thức", "Máy móc", "Đất đai"],
    correctAnswer: 1,
    explanation:
      "C. Mác đã tiên đoán tri thức sẽ trở thành lực lượng sản xuất trực tiếp.",
    building: "Thư viện công nghệ",
  },
  {
    id: 5,
    question:
      'Hồ Chí Minh khẳng định: "Xã hội càng đi tới, công việc càng nhiều, máy móc càng tinh xảo. Mình mà không chịu học thì lạc hậu, mà lạc hậu là bị đào thải…" Câu nói này thể hiện điều gì?',
    options: [
      "Tầm quan trọng của học tập, tri thức và khoa học kỹ thuật",
      "Phản đối máy móc thay thế con người",
      "Vai trò của lao động thủ công",
      "Khuyến khích làm việc chân tay",
    ],
    correctAnswer: 0,
    explanation:
      "Bác Hồ nhấn mạnh tầm quan trọng của học tập và tri thức trong thời đại hiện đại.",
    building: "Trường Đại học",
  },
  {
    id: 6,
    question:
      'Theo tư tưởng Hồ Chí Minh, yếu tố nào được coi là "quốc sách hàng đầu" trong sự nghiệp công nghiệp hóa, hiện đại hóa?',
    options: [
      "Nông nghiệp",
      "Xuất khẩu lao động",
      "Thương mại điện tử",
      "Giáo dục và phát triển con người",
    ],
    correctAnswer: 3,
    explanation:
      "Giáo dục và phát triển con người là quốc sách hàng đầu theo tư tưởng Hồ Chí Minh.",
    building: "Nâng cấp Đại học",
  },
  {
    id: 7,
    question: "Đại hội Đảng toàn quốc lần thứ XII xác định:",
    options: [
      "Phát triển công nghiệp nặng là trọng tâm",
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức",
      "Tăng cường khai thác tài nguyên thiên nhiên để công nghiệp hóa",
      "Tập trung phát triển kinh tế nông nghiệp truyền thống",
    ],
    correctAnswer: 2,
    explanation:
      "Đây là chủ trương, định hướng chiến lược rất quan trọng được nêu rõ trong văn kiện Đại hội Đảng toàn quốc lần thứ XII (2016). Phương án C, “Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức”, là trích dẫn chính xác khẩu hiệu, nhấn mạnh sự kết hợp không thể tách rời của hai quá trình này",
    building: "Trung tâm Dữ liệu",
  },
  {
    id: 8,
    question: "Việc gắn CNH, HĐH với KTTT giúp Việt Nam:",
    options: [
      "Phát triển theo mô hình truyền thống, chậm rãi nhưng an toàn",
      "Giảm đầu tư vào khoa học công nghệ",
      "Hạn chế hội nhập quốc tế",
      '"Đi tắt, đón đầu" trong cách mạng công nghiệp 4.0, nâng cao năng suất và giá trị sản phẩm',
    ],
    correctAnswer: 3,
    explanation:
      "Gắn CNH, HĐH với KTTT giúp Việt Nam đi tắt, đón đầu trong CMCN 4.0.",
    building: "Tòa nhà Công nghệ Cao",
  },
  {
    id: 9,
    question:
      "Tư tưởng Hồ Chí Minh về công nghiệp hóa, hiện đại hóa gắn liền với quan điểm nào sau đây?",
    options: [
      "Công nghiệp hóa chỉ là nhiệm vụ của Nhà nước",
      'Công nghiệp hóa phải là "sự nghiệp của toàn dân", dựa vào sức dân, trí dân',
      "Phát triển công nghiệp nặng quan trọng hơn con người",
      "Ưu tiên cơ giới hóa trước đào tạo con người",
    ],
    correctAnswer: 1,
    explanation:
      "Tư tưởng Hồ Chí Minh luôn nhấn mạnh CNH, HĐH là sự nghiệp của toàn dân.",
    building: "Công viên Công nghệ",
  },
  {
    id: 10,
    question: "Bạn có thấy nhóm 3 tuyệt đỉnh tuyệt vời không?",
    options: [
      "Cóa thấy chứ!",
      "Tuyệt đỉnh!",
      "Đỉnh cao của đỉnh cao!",
      "Hơi hơi thôi!",
    ],
    correctAnswer: 2,
    explanation: "Nhóm 3 thật tuyệt đỉnh!",
    building: "Thành phố Thông minh",
  },
  //  {
  //   id: 10,
  //   question:
  //     "Ý nghĩa của việc đẩy mạnh CNH, HĐH gắn với KTTT trong giai đoạn hiện nay là:",
  //   options: [
  //     "Là con đường tất yếu để phát triển nhanh, bền vững, nâng cao vị thế quốc gia trong khu vực",
  //     "Giúp Việt Nam trở thành quốc gia phát triển theo mô hình công nghiệp hóa truyền thống",
  //     "Tạo thêm việc làm giản đơn cho người lao động",
  //     "Làm chậm quá trình hội nhập để bảo vệ sản xuất trong nước",
  //   ],
  //   correctAnswer: 0,
  //   explanation:
  //     "Đây là con đường tất yếu để Việt Nam phát triển nhanh và bền vững.",
  //   building: "Thành phố Thông minh",
  // },
];

type GameState = "start" | "playing" | "video" | "end" | "leaderboard";

function Game() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(10).fill(false)
  );
  const [finalScore, setFinalScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    // Load leaderboard from API
    const fetchLeaderboard = async () => {
      try {
        const res = await LeaderboardEntryServices.getLeaderboardEntries();
        if (res && res.data) {
          const entries = Array.isArray(res.data) ? res.data : [];
          entries.sort((a: LeaderboardEntry, b: LeaderboardEntry) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.time - b.time;
          });
          setLeaderboard(entries.slice(0, 10));
        }
      } catch (err) {
        console.error("Failed to load leaderboard from API", err);
      }
    };

    fetchLeaderboard();
  }, []);

  const saveToLeaderboard = async (
    name: string,
    finalScore: number,
    time: number
  ) => {
    const newEntry: LeaderboardEntry = {
      name,
      score: finalScore,
      date: new Date().toLocaleDateString("vi-VN"),
      time,
    };

    try {
      // Try to save to backend
      await LeaderboardEntryServices.createLeaderboardEntry(newEntry);

      // Re-fetch the leaderboard from backend to keep it authoritative
      const res = await LeaderboardEntryServices.getLeaderboardEntries();
      if (res && res.data) {
        const entries = Array.isArray(res.data) ? res.data : [];
        entries.sort((a: LeaderboardEntry, b: LeaderboardEntry) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.time - b.time;
        });
        setLeaderboard(entries.slice(0, 10));
      }
    } catch (err) {
      console.error("Failed to save leaderboard entry to API", err);
      // Fallback: update local state only (no localStorage usage as requested)
      const updatedLeaderboard = [...leaderboard, newEntry]
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.time - b.time;
        })
        .slice(0, 10);
      setLeaderboard(updatedLeaderboard);
    }
  };

  const startGame = () => {
    if (playerName.trim()) {
      setGameState("playing");
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setStartTime(Date.now());
      setAnsweredQuestions(new Array(10).fill(false));
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Game ends - show video first
      const calculatedTime = Math.floor((Date.now() - startTime) / 1000);
      const currentScore = score;
      setTimeTaken(calculatedTime);
      setFinalScore(currentScore);
      // Save to leaderboard immediately before video
      saveToLeaderboard(playerName, currentScore, calculatedTime);
      setGameState("video");
    }
  };

  const handleVideoEnd = () => {
    // Go to end screen after video
    setGameState("end");
  };

  const restartGame = () => {
    setGameState("start");
    setPlayerName("");
  };

  const showLeaderboard = () => {
    setGameState("leaderboard");
  };

  const getCityImage = (scoreValue = score) => {
    if (scoreValue === 0) return "/img/game1.png";
    if (scoreValue <= 2) return "/img/game1.png";
    if (scoreValue <= 4) return "/img/game2.png";
    if (scoreValue <= 6) return "/img/game3.png";
    if (scoreValue <= 8) return "/img/game4.png";
    return "/img/game5.png";
  };

  const getCityDescription = (scoreValue = score) => {
    if (scoreValue === 10)
      return "Một thành phố thông minh, hiện đại rực rỡ với trí tuệ nhân tạo!";
    if (scoreValue >= 7)
      return "Thành phố công nghệ cao đang phát triển với nhiều đổi mới sáng tạo!";
    if (scoreValue >= 5)
      return "Thành phố công nghiệp ở mức trung bình, đang trên đà phát triển!";
    if (scoreValue >= 3)
      return "Giai đoạn đầu công nghiệp hóa, còn nhiều tiềm năng phát triển!";
    return "Vẫn ở giai đoạn nông nghiệp, cần nhiều tri thức để phát triển!";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <FaTrophy className="rank-icon gold" />;
    if (index === 1) return <FaTrophy className="rank-icon silver" />;
    if (index === 2) return <FaTrophy className="rank-icon bronze" />;
    return <FaMedal className="rank-icon" />;
  };

  // Start Screen
  if (gameState === "start") {
    return (
      <div className="game-container">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(37,129,152)"
          hoverFillColor="transparent"
        />
        <div className="game-header">
          <button className="nav-button" onClick={() => navigate("/")}>
            <FaHome /> Trang chủ
          </button>
        </div>

        <div className="start-screen">
          <div className="start-content">
            <div className="start-image">
              <img src="/img/game1.png" alt="Start" />
            </div>
            <h1 className="game-title">Hành Trình Tri Thức</h1>
            <h2 className="game-subtitle">Xây Dựng Tương Lai</h2>
            <p className="game-description">
              Trả lời đúng 10 câu hỏi để xây dựng một quốc gia hiện đại, phát
              triển dựa trên tri thức. Mỗi câu trả lời đúng sẽ nâng cấp thành
              phố của bạn!
            </p>

            <div className="name-input-container">
              <input
                type="text"
                className="name-input"
                placeholder="Nhập tên của bạn..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && startGame()}
                maxLength={20}
              />
            </div>

            <button
              className="start-button"
              onClick={startGame}
              disabled={!playerName.trim()}
              style={{ marginRight: "10px" }}
            >
              <span>Bắt đầu Sứ Mệnh!</span>
              <FaArrowRight />
            </button>

            <button className="leaderboard-button" onClick={showLeaderboard}>
              <FaTrophy /> Bảng Xếp Hạng
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Leaderboard Screen
  if (gameState === "leaderboard") {
    return (
      <div className="game-container">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(37,129,152)"
          hoverFillColor="transparent"
        />
        <div className="game-header">
          <button className="nav-button" onClick={() => setGameState("start")}>
            <FaArrowRight className="rotate-180" /> Quay lại
          </button>
        </div>

        <div className="leaderboard-screen">
          <div className="leaderboard-content">
            <div className="leaderboard-title">
              <FaTrophy className="trophy-icon" />
              <h1>Bảng Xếp Hạng</h1>
            </div>

            {leaderboard.length === 0 ? (
              <div className="no-data">
                <p>Chưa có người chơi nào. Hãy là người đầu tiên!</p>
              </div>
            ) : (
              <div className="leaderboard-list">
                {leaderboard.map((entry, index) => (
                  <div key={index} className="leaderboard-item">
                    <div className="rank">
                      {getRankIcon(index)}
                      <span className="rank-number">#{index + 1}</span>
                    </div>
                    <div className="player-info">
                      <div className="player-name">{entry.name}</div>
                      <div className="player-date">{entry.date}</div>
                    </div>
                    <div className="player-stats">
                      <div className="player-score">
                        <FaStar className="star-icon" />
                        {entry.score}/10
                      </div>
                      <div className="player-time">
                        ⏱️ {formatTime(entry.time)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              className="back-button"
              onClick={() => setGameState("start")}
            >
              Quay lại Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Playing Screen
  if (gameState === "playing") {
    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
      <div className="game-container playing">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(37,129,152)"
          hoverFillColor="transparent"
        />
        <div className="game-header">
          <button className="nav-button" onClick={() => navigate("/")}>
            <FaHome /> Trang chủ
          </button>
          <div className="player-info-header">
            <span className="player-name-display">👤 {playerName}</span>
          </div>
        </div>

        <div className="game-main">
          <div className="game-left">
            <div className="city-visualization">
              <div className="city-image">
                <img src={getCityImage()} alt="City progress" />
              </div>
              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Mức độ Hiện Đại Hóa</span>
                  <span className="progress-score">
                    {score}/{questions.length}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(score / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="buildings-unlocked">
                  {questions.slice(0, currentQuestion + 1).map((q, idx) => (
                    <div
                      key={idx}
                      className={`building-item ${
                        answeredQuestions[idx] ? "unlocked" : "locked"
                      }`}
                    >
                      {answeredQuestions[idx] ? "✅" : "🔒"} {q.building}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="game-right">
            <div className="question-section">
              <div className="question-header">
                <span className="question-number">
                  Câu {currentQuestion + 1}/{questions.length}
                </span>
              </div>

              <h2 className="question-text">{question.question}</h2>

              <div className="options-container">
                {question.options.map((option, index) => {
                  let optionClass = "option-button";
                  if (showResult) {
                    if (index === question.correctAnswer) {
                      optionClass += " correct";
                    } else if (index === selectedAnswer) {
                      optionClass += " incorrect";
                    }
                  } else if (selectedAnswer === index) {
                    optionClass += " selected";
                  }

                  return (
                    <button
                      key={index}
                      className={optionClass}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="option-text">{option}</span>
                      {showResult && index === question.correctAnswer && (
                        <FaCheckCircle className="check-icon" />
                      )}
                      {showResult && index === selectedAnswer && !isCorrect && (
                        <FaTimesCircle className="times-icon" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div
                  className={`result-message ${
                    isCorrect ? "correct" : "incorrect"
                  }`}
                >
                  <div className="result-icon">{isCorrect ? "🎉" : "😔"}</div>
                  <div className="result-text">
                    {isCorrect ? (
                      <>
                        <strong>Chính xác!</strong>
                        <p>{question.explanation}</p>
                        <p className="building-unlocked-text">
                          🏗️ Đã xây: {question.building}
                        </p>
                      </>
                    ) : (
                      <>
                        <strong>Chưa đúng!</strong>
                        <p>{question.explanation}</p>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="action-buttons">
                {!showResult ? (
                  <button
                    className="submit-button"
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                  >
                    Xác nhận
                  </button>
                ) : (
                  <button className="next-button" onClick={handleNextQuestion}>
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Xem kết quả"}
                    <FaArrowRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Video Screen
  if (gameState === "video") {
    return (
      <div className="game-container video-screen">
        <div className="video-overlay">
          <video
            className="ending-video"
            src="/video/ending.mp4"
            autoPlay
            onEnded={handleVideoEnd}
            onClick={() => {
              // Allow skip by clicking
              handleVideoEnd();
            }}
          >
            <source src="/video/ending.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="skip-hint">
            <p>Nhấp vào màn hình để bỏ qua</p>
          </div>
        </div>
      </div>
    );
  }

  // End Screen
  if (gameState === "end") {
    return (
      <div className="game-container">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(37,129,152)"
          hoverFillColor="transparent"
        />
        <div className="game-header">
          <button className="nav-button" onClick={() => navigate("/")}>
            <FaHome /> Trang chủ
          </button>
        </div>

        <div className="end-screen">
          <div className="end-content">
            <div className="celebration">
              <FaTrophy className="trophy-big" />
              <h1 className="end-title">Chúc mừng, {playerName}!</h1>
              <div className="end-score">
                <span className="score-number">{finalScore}</span>
                <span className="score-label">/10 câu đúng</span>
              </div>
              <div className="end-time">
                <span className="time-label">Thời gian:</span>
                <span className="time-value">{formatTime(timeTaken)}</span>
              </div>
            </div>

            <div className="final-city">
              <img src={getCityImage(finalScore)} alt="Final city" />
              <p className="city-description">
                {getCityDescription(finalScore)}
              </p>
            </div>

            <div className="end-message">
              <p className="message-text">
                {finalScore === 10
                  ? "Xuất sắc! Bạn đã hoàn thành xuất sắc hành trình xây dựng một quốc gia tri thức!"
                  : finalScore >= 7
                  ? "Rất tốt! Bạn đã có kiến thức vững vàng về CNH, HĐH và KTTT!"
                  : finalScore >= 5
                  ? "Khá tốt! Bạn đã hiểu được nhiều khái niệm quan trọng!"
                  : "Hãy tiếp tục học hỏi để xây dựng tương lai tốt đẹp hơn!"}
              </p>
              <p className="quote">
                "Tri thức chính là động lực để phát triển. Bạn đã sẵn sàng xây
                dựng tương lai chưa?"
              </p>
            </div>

            <div className="end-actions">
              <button className="play-again-button" onClick={restartGame}>
                <FaArrowRight className="rotate-180" /> Chơi lại
              </button>
              <button
                className="view-leaderboard-button"
                onClick={showLeaderboard}
              >
                <FaTrophy /> Xem Bảng Xếp Hạng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Game;
