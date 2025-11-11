import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import {
  FaCogs,
  FaExclamationTriangle,
  FaRobot,
  FaUsers,
  FaIndustry,
  FaBrain,
  FaRocket,
  FaChartLine,
  FaNetworkWired,
  FaGraduationCap,
  FaLeaf,
  FaGlobe,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import Header from "../../components/Header/Header";
import "./index.scss";

function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.log("Video not found, using fallback styling");
    setIsVideoLoaded(true);
  };

  const scrollToContent = () => {
    document
      .getElementById("content-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      {/* Header with Scroll Progress */}
      <Header />

      {/* Hero Section với Video Background */}
      <section id="hero" className="hero-section">
        <div className="video-container">
          <video
            ref={videoRef}
            className={`hero-video ${isVideoLoaded ? "loaded" : ""}`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
          >
            <source src="/vietnam.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient nếu video không load được */}
          <div className="fallback-background"></div>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line-1">Công Nghiệp Hóa Hiện Đại Hóa</span>
              <span className="title-line-2">Kinh Tế Tri Thức</span>
            </h1>
            <p className="hero-subtitle">
              Tư duy chiến lược của Đảng tại Đại hội XII và con đường phát triển
              của Việt Nam
            </p>
            <button className="cta-button" onClick={scrollToContent}>
              <span className="cta-text">Khám Phá</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Cuộn xuống</span>
        </div>
      </section>

      {/* Content Section */}
      <section id="content-section" className="content-section">
        <div className="content-container">
          <div className="section-intro" data-aos="fade-up">
            <h2 className="section-title">
              Con Đường Phát Triển của nước Việt Nam
            </h2>
            <div className="title-divider"></div>
            <p className="section-description">
              Đại hội Đảng toàn quốc lần thứ XII đánh dấu bước phát triển quan
              trọng trong tư duy về con đường phát triển đất nước. Trong bối
              cảnh Cách mạng công nghiệp 4.0 và hội nhập quốc tế sâu rộng, việc
              "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế
              tri thức" không chỉ là một chủ trương, mà là yêu cầu tất yếu, mang
              tầm nhìn chiến lược để Việt Nam "đi tắt, đón đầu" và phát triển
              nhanh, bền vững.
            </p>
          </div>

          {/* Phần I: Bóc tách Khái niệm */}
          <div id="theory" className="theory-section">
            <div className="section-header" data-aos="fade-right">
              <span className="section-number">I</span>
              <h2 className="section-heading">
                Khái niệm: CNH, HĐH và Kinh tế Tri thức
              </h2>
            </div>

            <div className="theory-content">
              {/* Decorative Quote */}
              <div className="decorative-quote" data-aos="fade-up">
                <div className="quote-ornament left"></div>
                <p className="quote-text">
                  Để hiểu rõ chủ trương của Đảng, trước hết cần làm rõ các khái
                  niệm cốt lõi: Công nghiệp hóa, Hiện đại hóa và Kinh tế Tri
                  thức.
                </p>
                <div className="quote-ornament right"></div>
              </div>

              {/* Visual Separator */}
              <div className="visual-separator" data-aos="zoom-in">
                <div className="separator-line"></div>
                <div className="separator-icon">
                  <FaIndustry />
                </div>
                <div className="separator-line"></div>
              </div>

              <div className="dual-tendency">
                <h3 className="subsection-title" data-aos="fade-up">
                  Công nghiệp hóa, Hiện đại hóa (CNH, HĐH)
                </h3>
                <div className="tendency-grid">
                  <div
                    className="tendency-card"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="tendency-number">01</div>
                    <h4 className="tendency-title">Công nghiệp hóa</h4>
                    <p className="tendency-desc">
                      Tập trung cơ giới hóa, tự động hóa, nâng cao tỷ trọng của
                      ngành công nghiệp và dịch vụ trong cơ cấu kinh tế. Chuyển
                      từ lạc hậu, lao động thủ công sang sản xuất hiện đại với
                      máy móc tiên tiến.
                    </p>
                  </div>
                  <div
                    className="tendency-card"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="tendency-number">02</div>
                    <h4 className="tendency-title">Hiện đại hóa</h4>
                    <p className="tendency-desc">
                      Nâng cao trình độ công nghệ, phương pháp quản lý, kỹ năng
                      lao động trong tất cả các ngành (kể cả nông nghiệp, dịch
                      vụ) để đạt trình độ tiên tiến của thế giới. Mục tiêu là
                      tạo ra năng suất lao động vượt trội.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Image with Frame */}
              <div className="content-image-split" data-aos="fade-up">
                <div className="content-side">
                  <div className="side-ornament"></div>
                  <h3
                    className="subsection-title"
                    style={{ textAlign: "left" }}
                  >
                    Kinh tế <span className="title-accent">Tri thức</span>
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "#f5f0e8",
                    }}
                  >
                    Kinh tế Tri thức là hình thái phát triển cao hơn, trong đó
                    Tri thức (sáng tạo, thông tin, công nghệ) trở thành nguồn
                    lực chủ yếu tạo ra của cải, thay vì dựa vào tài nguyên thiên
                    nhiên hay lao động cơ bắp.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      color: "rgba(245, 240, 232, 0.8)",
                      marginTop: "1rem",
                    }}
                  >
                    Lao động tri thức và nguồn nhân lực chất lượng cao trở thành
                    lực lượng sản xuất trực tiếp và quan trọng nhất, cùng với
                    ứng dụng mạnh mẽ công nghệ cao vào mọi lĩnh vực.
                  </p>
                </div>
                <div className="image-side">
                  <div className="image-frame">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                      alt="Kinh tế tri thức"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="principles-section">
                <h3 className="subsection-title" data-aos="fade-up">
                  Mối Quan Hệ Biện Chứng
                </h3>
                <div className="principles-list">
                  <div
                    className="principle-item"
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    <div className="principle-icon">
                      <FaCogs />
                    </div>
                    <div className="principle-content">
                      <h4>CNH, HĐH tạo nền tảng</h4>
                      <p>
                        Tạo cơ sở vật chất - kỹ thuật (hạ tầng điện, giao thông,
                        viễn thông, hạ tầng số) để Tri thức có thể được sản
                        sinh, truyền tải và ứng dụng
                      </p>
                    </div>
                  </div>
                  <div
                    className="principle-item"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <div className="principle-icon">
                      <FaRocket />
                    </div>
                    <div className="principle-content">
                      <h4>KTTT là động lực, định hướng</h4>
                      <p>
                        Giúp quá trình CNH, HĐH diễn ra nhanh hơn, hiệu quả hơn
                        và bền vững hơn. Việt Nam có thể "đi tắt, đón đầu" nhờ
                        công nghệ tiên tiến
                      </p>
                    </div>
                  </div>
                  <div
                    className="principle-item"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <div className="principle-icon">
                      <FaChartLine />
                    </div>
                    <div className="principle-content">
                      <h4>Chuyển đổi mô hình tăng trưởng</h4>
                      <p>
                        Từ chiều rộng (số lượng) sang chiều sâu (chất lượng),
                        nâng cao giá trị gia tăng và giảm tác động tiêu cực đến
                        môi trường
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phần II: Nền tảng Lý luận */}
          <div id="characteristics" className="characteristics-section">
            <div className="section-header" data-aos="fade-right">
              <span className="section-number">II</span>
              <h2 className="section-heading">Nền Tảng Lý Luận và Tư Tưởng</h2>
            </div>

            <div className="characteristics-grid">
              <div
                className="char-card"
                data-aos="flip-left"
                data-aos-delay="100"
              >
                <div className="char-number">01</div>
                <h4 className="char-title">Chủ nghĩa Mác - Lênin</h4>
                <p className="char-desc">
                  "Tri thức là lực lượng sản xuất trực tiếp" - C. Mác đã tiên
                  đoán. Ngày nay, trong KTTT, khoa học và công nghệ chính là
                  động lực chủ yếu thúc đẩy tăng trưởng. Tính tất yếu "đi tắt,
                  đón đầu" giúp Việt Nam rút ngắn khoảng cách phát triển.
                </p>
              </div>
              <div
                className="char-card"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <div className="char-number">02</div>
                <h4 className="char-title">Tư tưởng Hồ Chí Minh</h4>
                <p className="char-desc">
                  "Xã hội càng đi tới, công việc càng nhiều, máy móc càng tinh
                  xảo. Mình mà không chịu học thì lạc hậu mà lạc hậu là bị đào
                  thải" - Bác Hồ nhấn mạnh vai trò của khoa học, kỹ thuật và con
                  người trong phát triển.
                </p>
              </div>
              <div
                className="char-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <div className="char-number">03</div>
                <h4 className="char-title">Con người là trung tâm</h4>
                <p className="char-desc">
                  Tư tưởng Hồ Chí Minh luôn lấy con người làm trung tâm. Trong
                  KTTT, nguồn nhân lực chất lượng cao chính là nhân tố quyết
                  định. Giáo dục là quốc sách hàng đầu để phát triển dân trí và
                  kỹ thuật.
                </p>
              </div>
            </div>

            <div className="image-divider" data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                alt="Đào tạo và giáo dục"
                className="section-image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="policy-direction">
              <h3 className="subsection-title" data-aos="fade-up">
                Định Hướng Chiến Lược của Đảng
              </h3>
              <div className="direction-grid">
                <div
                  className="direction-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="direction-icon">
                    <MdScience />
                  </div>
                  <h4>Khoa Học - Công Nghệ</h4>
                  <p>
                    Coi khoa học - công nghệ, đổi mới sáng tạo là nền tảng, động
                    lực của phát triển nhanh và bền vững. Xây dựng CNXH trên nền
                    tảng vật chất - kỹ thuật hiện đại.
                  </p>
                </div>
                <div
                  className="direction-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="direction-icon">
                    <FaGraduationCap />
                  </div>
                  <h4>Giáo Dục - Đào Tạo</h4>
                  <p>
                    Giáo dục là quốc sách hàng đầu để phát triển dân trí, đào
                    tạo nhân lực có trình độ, văn hóa và kỹ thuật. Nguồn nhân
                    lực chất lượng cao là nhân tố quyết định thành bại.
                  </p>
                </div>
                <div
                  className="direction-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="direction-icon">
                    <FaUsers />
                  </div>
                  <h4>Sự Nghiệp Toàn Dân</h4>
                  <p>
                    CNH, HĐH là "sự nghiệp của toàn dân". Huy động mọi nguồn
                    lực, đặc biệt là trí tuệ của toàn dân tộc, vào công cuộc
                    phát triển đất nước.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phần III: Yêu cầu từ Thực tiễn */}
          <div id="religion" className="religion-section">
            <div className="section-header" data-aos="fade-right">
              <span className="section-number">III</span>
              <h2 className="section-heading">
                Yêu Cầu Cấp Bách từ Thực Tiễn Đất Nước
              </h2>
            </div>

            <div className="religion-content">
              <div className="religion-nature">
                <h3 className="subsection-title" data-aos="fade-up">
                  Thực Trạng Nền Kinh Tế (Đại hội XII)
                </h3>
                <div className="nature-boxes">
                  <div
                    className="nature-box"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="nature-label">Năng Suất Thấp</div>
                    <p>
                      Năng suất lao động và chất lượng sức cạnh tranh chưa cao
                    </p>
                  </div>
                  <div
                    className="nature-box"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="nature-label">Tăng Trưởng Chiều Rộng</div>
                    <p>
                      Dựa vào khai thác tài nguyên, lao động giá rẻ, mở rộng vốn
                    </p>
                  </div>
                  <div
                    className="nature-box"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="nature-label">Hàm Lượng KH&CN Thấp</div>
                    <p>Đổi mới sáng tạo trong tăng trưởng còn hạn chế</p>
                  </div>
                </div>
              </div>

              <div className="image-divider" data-aos="zoom-in">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                  alt="Phát triển kinh tế"
                  className="section-image"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Enhanced Stats Grid */}
              <div className="stats-grid-enhanced">
                <div
                  className="stat-card"
                  data-aos="flip-up"
                  data-aos-delay="100"
                >
                  <div className="stat-icon">
                    <FaGlobe />
                  </div>
                  <div className="stat-number">4.0</div>
                  <div className="stat-label">Cách Mạng Công Nghiệp</div>
                  <div className="stat-description">
                    Bối cảnh toàn cầu: AI, Big Data, IoT thúc đẩy chuyển đổi
                  </div>
                </div>
                <div
                  className="stat-card"
                  data-aos="flip-up"
                  data-aos-delay="200"
                >
                  <div className="stat-icon">
                    <FaExclamationTriangle />
                  </div>
                  <div className="stat-number">Bẫy</div>
                  <div className="stat-label">Thu Nhập Trung Bình</div>
                  <div className="stat-description">
                    Nguy cơ tụt hậu nếu không chuyển đổi mô hình tăng trưởng
                  </div>
                </div>
                <div
                  className="stat-card"
                  data-aos="flip-up"
                  data-aos-delay="300"
                >
                  <div className="stat-icon">
                    <FaRocket />
                  </div>
                  <div className="stat-number">Đi Tắt</div>
                  <div className="stat-label">Đón Đầu</div>
                  <div className="stat-description">
                    Cơ hội để rút ngắn khoảng cách phát triển với các nước tiên
                    tiến
                  </div>
                </div>
              </div>

              <div className="religion-principles">
                <h3 className="subsection-title" data-aos="fade-up">
                  Áp Lực từ Hội Nhập và CMCN 4.0
                </h3>
                <div className="principle-cards">
                  <div
                    className="reli-principle-card"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="reli-icon">
                      <FaGlobe />
                    </div>
                    <h4>Hội Nhập Sâu Rộng</h4>
                    <p>
                      Việt Nam không thể cạnh tranh chỉ dựa vào lao động giá rẻ.
                      Phải tham gia sâu vào chuỗi giá trị toàn cầu bằng cách
                      tăng giá trị gia tăng dựa trên tri thức và công nghệ.
                    </p>
                  </div>
                  <div
                    className="reli-principle-card"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="reli-icon">
                      <GiArtificialIntelligence />
                    </div>
                    <h4>Cách Mạng 4.0</h4>
                    <p>
                      Cuộc cách mạng khoa học - công nghệ (AI, Big Data, IoT,
                      Blockchain) vừa là thách thức, vừa là cơ hội vàng để các
                      nước đi sau "đi tắt, đón đầu" và rút ngắn khoảng cách phát
                      triển.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phần IV: Từ chủ trương đến hành động */}
          <div id="strategic" className="strategic-section">
            <div className="section-header" data-aos="fade-right">
              <span className="section-number">IV</span>
              <h2 className="section-heading">
                Từ Chủ Trương đến Hành Động: Dẫn Chứng Thực Tế
              </h2>
            </div>

            <div className="strategic-content">
              <div className="framework-box" data-aos="fade-up">
                <h3 className="framework-title">
                  Chương Trình Hành Động Quốc Gia
                </h3>
                <div className="framework-points">
                  <div className="framework-point">
                    <span className="point-marker">▸</span>
                    <p>
                      <strong>Chuyển đổi số quốc gia:</strong> Phát triển Chính
                      phủ số, Kinh tế số, Xã hội số. Hình thành các doanh nghiệp
                      công nghệ số Việt Nam có năng lực toàn cầu.
                    </p>
                  </div>
                  <div className="framework-point">
                    <span className="point-marker">▸</span>
                    <p>
                      <strong>Make in Vietnam:</strong> Chuyển từ "gia công, lắp
                      ráp" sang "sáng tạo, thiết kế và sản xuất" tại Việt Nam.
                      Khuyến khích đổi mới sáng tạo và công nghệ Việt.
                    </p>
                  </div>
                  <div className="framework-point">
                    <span className="point-marker">▸</span>
                    <p>
                      <strong>Nông nghiệp công nghệ cao:</strong> Ứng dụng KTTT
                      vào lĩnh vực truyền thống. Nông nghiệp thông minh, nông
                      nghiệp sạch, công nghệ sinh học.
                    </p>
                  </div>
                </div>
              </div>

              <div className="image-divider" data-aos="zoom-in">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                  alt="Công nghệ và đổi mới"
                  className="section-image"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="challenges-section">
                <h3 className="subsection-title" data-aos="fade-up">
                  Chiến Lược Phát Triển KH&CN
                </h3>
                <div className="challenge-timeline">
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <div className="timeline-marker">
                      <MdScience />
                    </div>
                    <div className="timeline-content">
                      <h4>Khoa Học - Công Nghệ là Động Lực</h4>
                      <p>
                        Coi KH&CN và đổi mới sáng tạo là động lực quan trọng
                        nhất của tăng trưởng. Tăng cường đầu tư cho vườn ươm
                        công nghệ, quỹ đầu tư mạo hiểm và hệ sinh thái khởi
                        nghiệp.
                      </p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="timeline-marker">
                      <FaGraduationCap />
                    </div>
                    <div className="timeline-content">
                      <h4>Đổi Mới Giáo Dục - Đào Tạo</h4>
                      <p>
                        Tập trung đào tạo nguồn nhân lực chất lượng cao, có khả
                        năng thích ứng với môi trường làm việc số và có tư duy
                        sáng tạo, đổi mới.
                      </p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <div className="timeline-marker">
                      <FaLeaf />
                    </div>
                    <div className="timeline-content">
                      <h4>Phát Triển Bền Vững</h4>
                      <p>
                        Gắn CNH, HĐH với bảo vệ môi trường, phát triển xanh và
                        bền vững. Ứng dụng công nghệ để giảm thiểu tác động tiêu
                        cực đến thiên nhiên.
                      </p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="timeline-marker">
                      <FaNetworkWired />
                    </div>
                    <div className="timeline-content">
                      <h4>Xây Dựng Hạ Tầng Số</h4>
                      <p>
                        Đầu tư mạnh vào hạ tầng số, mạng viễn thông, trung tâm
                        dữ liệu để tạo nền tảng cho kinh tế tri thức phát triển.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phần V: Ý nghĩa chiến lược */}
          <div id="gallery" className="gallery-section">
            <div className="section-header" data-aos="fade-right">
              <span className="section-number">V</span>
              <h2 className="section-heading">
                Ý Nghĩa Chiến Lược và Tầm Nhìn Tương Lai
              </h2>
            </div>

            <div className="gallery-intro" data-aos="fade-up">
              <p>
                "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh
                tế tri thức; coi khoa học – công nghệ, đổi mới sáng tạo và nguồn
                nhân lực chất lượng cao là nền tảng, động lực của phát triển
                nhanh và bền vững." - Đại hội XII
              </p>
            </div>

            <div className="gallery-grid">
              <div
                className="gallery-item large"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                    alt="Công nghệ và đổi mới"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Công Nghệ & Đổi Mới</h3>
                      <p>Nền tảng của kinh tế tri thức</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070"
                    alt="Công nghiệp hóa"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Công Nghiệp Hóa</h3>
                      <p>Chuyển đổi phương thức sản xuất hiện đại</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                    alt="Giáo dục đào tạo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Giáo Dục - Đào Tạo</h3>
                      <p>Phát triển nguồn nhân lực chất lượng cao</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                    alt="Kinh tế tri thức"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Kinh Tế Tri Thức</h3>
                      <p>Tri thức là yếu tố quyết định</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-item tall"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2148"
                    alt="Nông nghiệp công nghệ cao"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Nông Nghiệp Công Nghệ Cao</h3>
                      <p>Ứng dụng KTTT vào lĩnh vực truyền thống</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-item wide"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="gallery-image">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                    alt="Chuyển đổi số"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Chuyển Đổi Số Quốc Gia</h3>
                      <p>Chính phủ số, Kinh tế số, Xã hội số</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-cta" data-aos="fade-up">
              <button
                className="cta-button"
                onClick={() => (window.location.href = "/exhibition")}
              >
                <span className="cta-text">Khám Phá Triển Lãm 3D</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Ẩn Dụ: Con tàu phát triển */}
          <div className="metaphor-section">
            <div className="metaphor-container">
              <div className="metaphor-header" data-aos="fade-up">
                <span className="metaphor-icon">
                  <FaRocket />
                </span>
                <h3 className="metaphor-title">Tư Duy Qua Ẩn Dụ</h3>
              </div>
              <div className="metaphor-content">
                <div
                  className="metaphor-text"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <p>
                    Có thể hình dung quá trình CNH, HĐH gắn với KTTT như một
                    <strong> con tàu vũ trụ hiện đại</strong> thay vì chiếc
                    thuyền buồm truyền thống. Con tàu này cần cả động cơ mạnh mẽ
                    (CNH, HĐH) và hệ thống định vị thông minh (KTTT).
                  </p>
                  <p>
                    Động cơ (CNH, HĐH) cung cấp lực đẩy cơ bản, nhưng hệ thống
                    định vị thông minh (KTTT) giúp tàu bay đúng hướng, nhanh
                    hơn, hiệu quả hơn. Phi hành đoàn (nguồn nhân lực chất lượng
                    cao) điều khiển tàu, và bản đồ số (khoa học công nghệ) chỉ
                    đường "đi tắt, đón đầu" đến đích: Việt Nam phát triển, thu
                    nhập cao vào năm 2045.
                  </p>
                </div>
                <div
                  className="metaphor-visual"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="metaphor-elements">
                    <div
                      className="element-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <span className="element-emoji">
                        <FaIndustry />
                      </span>
                      <span className="element-label">CNH, HĐH (Động cơ)</span>
                    </div>
                    <div
                      className="element-item"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <span className="element-emoji">
                        <FaBrain />
                      </span>
                      <span className="element-label">KTTT (Định vị)</span>
                    </div>
                    <div
                      className="element-item"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <span className="element-emoji">
                        <FaGraduationCap />
                      </span>
                      <span className="element-label">
                        Nhân Lực (Phi hành đoàn)
                      </span>
                    </div>
                    <div
                      className="element-item"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      <span className="element-emoji">
                        <MdScience />
                      </span>
                      <span className="element-label">KH&CN (Bản đồ)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-section" data-aos="fade-up">
            <div className="quote-mark">"</div>
            <blockquote
              className="quote-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Gắn CNH, HĐH với KTTT không chỉ là một lựa chọn, mà là con đường
              tất yếu để Việt Nam phát triển nhanh, bền vững và khẳng định vị
              thế quốc gia trong kỷ nguyên số. Đây là con đường "đi tắt, đón
              đầu" duy nhất để đạt được mục tiêu: Đến năm 2030 trở thành quốc
              gia có công nghiệp hiện đại, đến năm 2045 trở thành nước phát
              triển.
            </blockquote>
            <div className="quote-author">
              — Đại Hội XII Đảng Cộng Sản Việt Nam
            </div>
          </div>

          <div className="cta-section">
            <h2 className="cta-section-title" data-aos="fade-up">
              Cùng Xây Dựng Kinh Tế Tri Thức
            </h2>
            <p
              className="cta-section-description"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tham gia vào cuộc cách mạng công nghiệp 4.0, đóng góp trí tuệ và
              sáng tạo để cùng xây dựng một Việt Nam phát triển dựa trên tri
              thức và công nghệ tiên tiến.
            </p>
            <button
              className="cta-button secondary"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span className="cta-text">Tìm Hiểu Thêm</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-line"></div>
          <p className="footer-text">
            © 2025 CNH, HĐH và Kinh Tế Tri Thức - Con Đường Phát Triển Việt Nam
          </p>
          <div className="footer-links">
            <a href="/ai-appendix" className="footer-link">
              <FaRobot /> Phụ Lục AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
