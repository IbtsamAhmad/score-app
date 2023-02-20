import React from "react";

const index = ({ setEmail, email }) => {
  const emailHandler = (e) => {
    localStorage.setItem("userEmail", `${e.target.value}`);
    setEmail(e.target.value);
  };

  return (
    <div className="form-container">
      <form
        action="https://app.convertkit.com/forms/4874872/subscriptions"
        method="post"
        data-sv-form="4874872"
        // data-sv-form="4843495"
        data-uid="ce78bcb582"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <div data-element="fields" data-stacked="false">
            <input
              required
              onChange={emailHandler}
              className="form-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              type="email"
            />
            <div>
             
            </div>

            <button data-element="submit" className="submit-btn">
              <span>
                Proceed{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* <div>
            <a href="https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by"
              data-variant="dark"
            //   target="_blank"
            //   rel="nofollow"
            >
              Built with ConvertKit
            </a>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default index;
