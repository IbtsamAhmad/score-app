import React from "react";

const index = ({ setEmail }) => {
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="form-container">
      <form
        action="https://app.convertkit.com/forms/4843495/subscriptions"
        method="post"
        data-sv-form="4843495"
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
            <div></div>

            <button data-element="submit" className="submit-btn">
              <span>Proceed</span>
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
