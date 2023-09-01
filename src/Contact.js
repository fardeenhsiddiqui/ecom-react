import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0 3rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            margin-top: 1rem;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe title="contact-us"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.761746705296!2d77.30047317387425!3d28.546880187968092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce41be7fa0e79%3A0xf5aab92c434b57cd!2sTayyab%20Masjid!5e0!3m2!1sen!2sin!4v1693216029589!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xeqbgwzp" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />

            <input type="email" name="Email" placeholder="Email" autoComplete="off" required />

            <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
