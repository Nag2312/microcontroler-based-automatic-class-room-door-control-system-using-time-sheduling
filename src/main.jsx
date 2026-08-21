import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

function CircuitMark() {
  return <div className="circuit-mark" aria-hidden="true"><i /><i /><i /><i /></div>
}

function App() {
  return <main>
    <header className="nav wrap">
      <a className="brand" href="#top">NDS<span>•</span>01</a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="status" href="mailto:nagendradshetll@gmail.com"><b /> Available for internships</a>
    </header>

    <section className="hero wrap" id="top">
      <div className="eyebrow">ELECTRONICS &amp; COMMUNICATION / 2024—2028</div>
      <div className="hero-grid">
        <div>
          <h1>Nagendra<br /><em>D. Shet</em></h1>
          <p className="intro">Building reliable systems at the intersection of <strong>hardware, code,</strong> and real-world impact.</p>
          <a className="button" href="#project">View selected work <Arrow /></a>
        </div>
        <div className="signal-panel">
          <div className="panel-label">LIVE SIGNAL / 01</div>
          <CircuitMark />
          <div className="signal-line"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="signal-stats"><span>SYS.STATUS<br /><b>ACTIVE</b></span><span>LOCATION<br /><b>INDIA</b></span></div>
        </div>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="ticker" aria-label="Skills"><div>ARDUINO UNO <i>✦</i> EMBEDDED C <i>✦</i> SENSOR INTERFACING <i>✦</i> PYTHON <i>✦</i> DIGITAL ELECTRONICS <i>✦</i> MATLAB <i>✦</i> ARDUINO UNO <i>✦</i></div></section>

    <section className="about wrap" id="about">
      <div className="section-tag">01 / PROFILE</div>
      <div className="about-copy">
        <p className="large-copy">I’m an enthusiastic <span>third-year E&amp;C engineering student</span> interested in designing intelligent electronics that respond when it matters.</p>
        <p>I bring a practical understanding of digital electronics, analog circuits, embedded systems, and communication engineering—paired with a curiosity for learning what’s next.</p>
      </div>
      <div className="education"><span>EDUCATION</span><p><b>B.E. Electronics &amp; Communication</b><br />Government Engineering College, Huvinadagali<br /><small>VTU, Belgaum · 2024—2028 · CGPA 8.25*</small></p><p><b>Pre-University Course</b><br />STJ COMP PU College, Davangere<br /><small>Karnataka State Board · 84.16%</small></p></div>
    </section>

    <section className="project wrap" id="project">
      <div className="project-head"><div className="section-tag">02 / SELECTED PROJECTS</div><span>01—03</span></div>
      <article className="project-card">
        <div className="project-visual">
          <div className="device"><div className="device-top"><span>FLAME SENSOR</span><b>●</b></div><div className="lcd">FIRE DETECTED<br /><i>ALERT ACTIVE</i></div><div className="pins"><i /><i /><i /><i /><i /><i /></div></div>
          <div className="scan-line" />
          <span className="visual-caption">ARDUINO-BASED MONITORING SYSTEM</span>
        </div>
        <div className="project-info">
          <div><span className="project-number">01</span><h2>Fire Detector<br />&amp; Alert System</h2></div>
          <p>A real-time, Arduino-powered safety monitor that detects flame intensity and triggers immediate audiovisual alerts.</p>
          <ul><li>Continuous flame monitoring with threshold-based control logic</li><li>LCD status display and buzzer-driven emergency notification</li><li>Built as a two-person embedded systems mini project</li></ul>
          <div className="tags"><span>ARDUINO UNO</span><span>EMBEDDED C</span><span>FLAME SENSOR</span><span>LCD</span><span>BUZZER</span></div>
        </div>
      </article>
      <article className="project-card project-card--light">
        <div className="project-visual project-visual--pulse">
          <div className="pulse-screen"><span>GSR SENSOR / A0</span><strong>CALIBRATING</strong><div className="pulse-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div><small>BASELINE: 512 &nbsp; | &nbsp; DELTA: +08</small></div>
          <span className="visual-caption">SKIN-CONDUCTANCE RESPONSE DEMO</span>
        </div>
        <div className="project-info">
          <div><span className="project-number">02</span><h2>Simple<br />Lie Detector</h2></div>
          <p>An Arduino learning project that measures changes in galvanic skin response (GSR) and visualises a user's stress response after a personal baseline is calibrated.</p>
          <ul><li>One-button calibration establishes a relative sensor baseline</li><li>LCD feedback and buzzer signal a significant response change</li><li>Uses moving-average filtering to reduce noisy readings</li></ul>
          <div className="tags"><span>ARDUINO UNO</span><span>GSR SENSOR</span><span>16x2 LCD</span><span>BUZZER</span><span>EMBEDDED C</span></div>
        </div>
      </article>
      <article className="project-card project-card--door">
        <div className="project-visual project-visual--door">
          <div className="door-frame"><div className="door-clock"><span>TIME SCHEDULE</span><strong>09:00</strong><small>CLASS IN SESSION</small></div><div className="door-panel"><i /><b /></div></div>
          <span className="visual-caption">RTC-DRIVEN CLASSROOM ACCESS SYSTEM</span>
        </div>
        <div className="project-info">
          <div><span className="project-number">03</span><h2>Automatic Classroom<br />Door Control</h2></div>
          <p>A microcontroller-based system that opens and closes a classroom door to a programmed timetable, improving punctuality, reducing manual effort, and supporting controlled access.</p>
          <ul><li>DS3231 real-time clock triggers time-based door operation</li><li>Arduino Uno drives an SG90 servo to open and close the door</li><li>Designed as a low-cost solution for classrooms, labs, libraries, and examination halls</li></ul>
          <div className="tags"><span>ARDUINO UNO R3</span><span>DS3231 RTC</span><span>SG90 SERVO</span><span>5V POWER</span><span>ARDUINO IDE</span></div>
          <details className="project-details"><summary>Project notes <span>+</span></summary><div><p><b>Expected outcomes:</b> accurate scheduling, 70-90% less manual effort, better time management, and potential energy savings.</p><p><b>Future scope:</b> RFID access, mobile-app and IoT monitoring, biometric authentication, and attendance management.</p><p><b>Limitations:</b> requires a reliable power supply and has limited flexibility unless schedules are reprogrammed.</p></div></details>
        </div>
      </article>
    </section>

    <section className="skills wrap">
      <div className="section-tag">03 / TOOLKIT</div>
      <div className="skill-columns"><div><h3>Hardware</h3><p>Arduino · 8051 Microcontroller · Flame Sensors · LCD Displays · Sensor Interfacing</p></div><div><h3>Software</h3><p>C · Embedded C · Python · MATLAB · Proteus · Arduino IDE</p></div><div><h3>Languages</h3><p>English · Hindi · Kannada · Konkani</p></div></div>
    </section>

    <footer id="contact">
      <div className="wrap footer-inner"><p className="section-tag">04 / GET IN TOUCH</p><h2>Let’s make<br /><em>something work.</em></h2><a className="email" href="mailto:nagendradshetll@gmail.com">nagendradshetll@gmail.com <Arrow /></a><div className="footer-bottom"><span>© 2026 NAGENDRA D. SHET</span><span>+91 63602 95389</span><a href="#top">BACK TO TOP ↑</a></div></div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
