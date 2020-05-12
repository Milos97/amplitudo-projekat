import React from "react";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq-wrapper-div">
        <h1 className="faq-heading">YouLearn FAQ</h1>
        <hr />
        <div className="faq-main-div">
          <div className="faq-text-div">
            <p>
              YouLearn's mission is to improve lives through learning. Our global
              marketplace features an extensive, multi-language library, which
              includes over 150,000 courses taught by expert instructors. You
              can take courses across a wide range of categories, some of which
              include: business & entrepreneurship, programming, academics, the
              arts, health & fitness, language, music, technology, games, and
              more. With instructors adding new content every day, be sure to
              check back regularly for the latest courses. The opportunities for
              learning are endless!
              <br />
              <br />
              Below are answers to some of the frequently asked questions we
              receive about YouLearn.
            </p>
            <p className="bold-p">What do YouLearn courses include?</p>
            <p>
              Each YouLearn course is created, owned and managed by the
              instructor(s). The foundation of each YouLearn course are its
              lectures, which can include videos, slides, text and additional
              resources the instructor has uploaded. In addition, instructors
              can add quizzes, practice tests, assignments and coding exercises,
              as a way to enhance the learning experience of students. <br />
              <br />To get a
              sense of what these lectures and features look like within the
              course dashboard, check out the lecture icon guide <a href="#">here</a>. <br />
              <br />For tips
              on how to search our marketplace and find courses you may be
              interested in taking, please read How to Search for Courses on the
              YouLearn Marketplace.
            </p>
            <p className="bold-p">How do I take a YouLearn course?</p>
            <p>
              YouLearn courses are entirely on-demand, which means that you can
              enroll in the courses that interest you and learn at your own
              pace. You can begin the course whenever you like, and there are no
              deadlines to complete it. <br />
              <br />YouLearn courses can be accessed from
              several different devices and platforms, including a desktop,
              laptop, and our Android or iOS mobile app. Detailed information on
              YouLearn’s platforms and features can be reviewed{" "}
              <a href="#">here</a>. <br />
              <br />After you enroll in a course, you can access
              it by clicking on the course link you will receive in your
              confirmation email, provided you’re logged into your YouLearn
              account. You can also begin the course by logging in and
              navigating to your My Courses page. <br />
              <br />For steps on how to log into
              your YouLearn account, please click <a href="#">here</a>.
            </p>

            <p className="bold-p">
              How long do I have to complete a YouLearn course?
            </p>
            <p>
              As noted above, there are no deadlines to begin or complete the
              course. Even after you complete the course, you will continue to
              have access to it, provided that your account’s in good standing,
              and YouLearn continues to have a license to the course. To learn more
              about our Lifetime Access policy, please click{" "}
              <a href="#">here</a>.
            </p>
            <p className="bold-p">Is YouLearn an accredited institution?</p>
            <p>
              While YouLearn is not an accredited institution, we offer
              skills-based courses taught by experts in their field, and every
              approved, paid course features a YouLearn certificate of completion.
              Certificates can be saved as a .pdf or .jpg file so that you can
              easily share your accomplishment.
            </p>
            <p className="bold-p">Is there any way to preview a course?</p>
            <p>
              Yes! If you're not sure if a course is right for you, you can
              start a free preview and watch a handful of lectures the
              instructor has selected. For steps on how to preview a course, and
              review key information about it, please click <a href="#">here</a>.
            </p>
            <p className="bold-p">What if I don’t like a course I purchased?</p>
            <p>
              We want you to be satisfied, so if you're not happy with a course,
              you can even request a full refund within 30 days of purchasing a
              course. For more information on our refund policy, please click 
              <a href="#"> here</a>.
            </p>
          </div>
          <div className="faq-sidebar-div">
            <div className="faq-sidebar-content">
                <h3>Related articles</h3>

                <p><a href="#">Lifetime Access</a></p>
                <p><a href="#">Certificate of Completion</a></p>
                <p><a href="#">Refund a Course</a></p>
                <p><a href="#">Payment Methods on YouLearn</a></p>
                <p className="last-child-p"><a href="#">What do the Icons under the Lectures Mean?</a></p>

                <h3>Student Topics</h3>
                
                <a href="#" className="faq-button">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
