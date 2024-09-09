import React, { useState, useEffect } from "react";
import api from "../../api/apiInterceptor";

const PrivacyPolicyPage = () => {
  // Privacy:
  const [privacy, setPrivacy] = useState(null);

  const getPrivacy = async () => {
    const privacy = await api.get("/policy/privacy");
    console.log(privacy);
  };

  useEffect(() => {
    getPrivacy();
  }, []);
  return (
    <div class="w-full h-full overflow-y-auto flex flex-col justify-start items-start gap-2">
      <div class="container mx-auto px-4 py-6">
        <h1 class="section-title">FareShare LLC’s Privacy Policy</h1>
        <p class="content">
          <strong>Last Updated: July 10, 2024</strong>
        </p>

        <section class="content">
          <p>
            This Privacy Policy is meant to help you understand how FareShare
            collects, uses, and shares some of your personal information and how
            to exercise the choices and rights you have in your information.
          </p>

          <h2 class="section-title">1. The Scope of This Policy</h2>
          <p>
            This policy applies to all FareShare users, including Riders and
            Drivers (including Driver applicants), and to all FareShare
            platforms and services, including our applications, websites,
            technology, facilities, and other services (collectively, the
            “FareShare Platform”). This policy applies only to personal
            information, not to aggregate information or information that does
            not identify you. Please remember that your use of the FareShare
            Platform is also subject to our Terms of Service.
          </p>

          <h2 class="section-title">2. The Information We Collect</h2>
          <p>
            When you use the FareShare Platform, we collect the information you
            provide, usage information, and information about your device. We
            also collect information about you from other sources like service
            providers, and optional programs in which you participate, which we
            may combine with other information we have about you. Here are the
            types of information we collect about you:
          </p>

          <h3 class="subsection-title">A. Information You Provide to Us</h3>
          <p>
            Account Registration. When you create an account with FareShare, we
            collect the information you provide us, such as your name, email
            address, phone number, birth date, profile photo, and payment
            information. You may choose to share additional info with us for
            your Rider profile, like saved addresses (e.g., home or work), and
            set up other preferences. We may ask that you provide additional
            information related to the identity of your account, such as
            documents related to identification (e.g., driver’s license), a
            profile picture, or “selfie” imagery. If you choose to engage in
            additional offerings on the FareShare Platform, you may provide us
            additional information relevant to those offerings.
          </p>
          <p>
            Driver Information. If you apply to be a Driver, we will collect the
            information you provide in your application, including your name,
            email address, phone number, birth date, profile photo, physical
            address, government identification number (such as social security
            number), driver’s license information, vehicle information, and car
            insurance information. We collect the payment information you
            provide us, including your bank routing numbers, and tax
            information. Depending on where you want to drive, we may also ask
            for additional business license or permit information or other
            information to manage driving and programs relevant to that
            location. We may need additional information from you at some point
            after you become a Driver, including information to confirm your
            identity (like “selfie” imagery).
          </p>
          <p>
            Ratings and Feedback. When you rate and provide feedback about the
            FareShare Platform (including about Riders or Drivers), we collect
            all of the information you provide in your feedback.
          </p>
          <p>
            Communications. When you contact us or we contact you, including
            through surveys or research projects, we collect any information
            that you provide, including the contents of the messages or
            attachments you send us.
          </p>

          <h3 class="subsection-title">
            B. Information We Collect When You Use the FareShare Platform
          </h3>
          <p>
            Location Information. The FareShare Platform collects location
            information (including GPS and Wi-Fi data, IP address, and Bluetooth
            data) differently depending on your FareShare app settings and
            device permissions as well as whether you are using the platform as
            a Rider or Driver:
          </p>
          <ul class="list-item">
            <li>
              <strong>Riders:</strong> We collect your device’s precise location
              when you open and use the FareShare app, including while the app
              is running in the background from the time you request a ride
              until it ends.
            </li>
            <li>
              <strong>Drivers:</strong> We collect your device’s precise
              location when you open and use the app, including while the app is
              running in the background. We also collect precise location for a
              limited time after you exit driver mode in order to detect ride
              incidents, and continue collecting it until a reported or detected
              incident is no longer active. If you choose to install a FareShare
              Platform device in or on your vehicle (e.g., a FareShare dashboard
              device or tablet), that device may collect precise location
              information when turned on.
            </li>
          </ul>

          <p>
            Usage Information. We collect information about your use of the
            FareShare Platform, including ride information like the date, time,
            destination, distance, route, payment, and whether you used a
            promotional or referral code. We also collect information about your
            interactions with the FareShare Platform like our apps and websites,
            including the pages and content you view and the dates and times of
            your use. We may also infer information from your use of or
            information you provide us in your interactions with the FareShare
            Platform.
          </p>

          <p>
            Device Information. We collect information about the devices you use
            to access the FareShare Platform, including device model, IP
            address, type of browser, version of operating system, identity of
            carrier and manufacturer, radio type (such as 4G), preferences and
            settings (such as preferred language), application installations,
            device identifiers, advertising identifiers, and push notification
            tokens. If you are a Driver, we also collect mobile sensor data from
            your device (such as speed, direction, height, acceleration,
            deceleration, and other technical data). If you have installed a
            FareShare Platform device in your vehicle (e.g., a FareShare
            dashboard device or tablet), that device may similarly collect
            sensor data and other information like location, as described when
            you choose and set up such devices.
          </p>

          <p>
            Address Book Contacts. You may set your device permissions to grant
            FareShare access to your contact lists and direct FareShare to
            access your contact list, for example to help you refer friends to
            FareShare. If you choose to do this, we will access the names and
            contact information of the people in your address book.
          </p>

          <p>
            Calendar Information. You may set your device permissions or
            otherwise grant FareShare access to your chosen calendar and direct
            FareShare to access calendar information, for example to help you
            get alerts to order a ride for your upcoming trip. If you choose to
            do this, we will access and store information available in your
            calendar to use in providing you these optional features.
          </p>

          <p>
            Cookies, Analytics, and Third-Party Technologies. We collect
            information through the use of “cookies”, tracking pixels, data
            analytics tools like Google Analytics, SDKs, and other third-party
            technologies to understand how you navigate through the FareShare
            Platform and interact with FareShare advertisements, to make your
            FareShare experience safer, to learn what content is popular, to
            improve your site experience, to serve you better ads on other
            sites, and to save your preferences. Cookies are small text files
            that web servers place on your device; they are designed to store
            basic information and to help websites and apps recognize your
            browser. We may use both session cookies and persistent cookies. A
            session cookie disappears after you close your browser. A persistent
            cookie remains after you close your browser and may be accessed
            every time you use the FareShare Platform.
          </p>

          <h3 class="subsection-title">
            C. Information We Collect From Other Sources
          </h3>
          <p>
            Service Providers and Other Parties. Service providers and other
            parties provide us with information needed for core aspects of the
            FareShare Platform, as well as for additional services, programs,
            loyalty benefits, and promotions that can enhance your FareShare
            experience. These service providers and other parties include
            background check providers, insurance partners, financial service
            providers, marketing providers, and other businesses. We obtain the
            following information about you from these parties:
          </p>
          <ul class="list-item">
            <li>
              Information to make the FareShare Platform safer, like background
              check information or identity verification information;
            </li>
            <li>
              Information about your participation in third-party programs that
              provide things like insurance coverage and financial instruments,
              such as insurance, payment, transaction, and fraud detection
              information;
            </li>
            <li>
              Information to operationalize loyalty and promotional/marketing
              programs or applications, services, or features you choose to
              connect or link to your FareShare account, such as information
              about your use of such programs, applications, services, or
              features;
            </li>
            <li>
              Information about you provided by specific services, such as
              vehicle, demographic, or driving records.
            </li>
          </ul>
          <p>
            Third-Party Applications. If you use third-party apps, features, or
            services that interact with the FareShare Platform or are integrated
            with it, or if you use your FareShare account to access third-party
            applications or services, we collect information related to your use
            of those services, such as third-party application or service data
            and authentication information, in accordance with the policies of
            those third parties.
          </p>

          <h2 class="section-title">
            3. How We Use the Information We Collect
          </h2>
          <p>
            We use the information we collect to operate, maintain, and improve
            the FareShare Platform. This includes:
          </p>
          <ul class="list-item">
            <li>
              Providing you with the FareShare Platform and responding to your
              needs;
            </li>
            <li>Improving our services and features;</li>
            <li>
              Customizing your experience, including showing relevant content
              and advertisements;
            </li>
            <li>
              Sending you communications, including updates, offers, and
              promotions;
            </li>
            <li>
              Enabling safety and security, including fraud detection and
              prevention;
            </li>
            <li>Facilitating customer support and resolving disputes;</li>
            <li>
              Analyzing usage patterns to understand how our services are used
              and to improve our offerings;
            </li>
            <li>
              Complying with legal obligations and enforcing our terms and
              policies.
            </li>
          </ul>

          <h2 class="section-title">4. Sharing of Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul class="list-item">
            <li>
              <strong>With Other Users:</strong> We share information with
              Riders and Drivers to facilitate rides, including ride details,
              ratings, and feedback.
            </li>
            <li>
              <strong>With Service Providers:</strong> We may share information
              with third-party service providers that perform services on our
              behalf, such as background checks, payment processing, and data
              analytics.
            </li>
            <li>
              <strong>With Business Partners:</strong> We may share information
              with business partners to offer you additional services or
              promotions.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose information to
              comply with legal obligations, respond to legal processes, or
              protect our rights and the rights of others.
            </li>
            <li>
              <strong>In Business Transfers:</strong> In the event of a merger,
              acquisition, or other business transfer, we may share information
              with the acquiring entity.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share information with
              your consent or at your direction.
            </li>
          </ul>

          <h2 class="section-title">5. Your Choices and Rights</h2>
          <p>
            You have the following rights and choices regarding your
            information:
          </p>
          <ul class="list-item">
            <li>
              <strong>Access and Update:</strong> You can access and update your
              personal information through your FareShare account settings.
            </li>
            <li>
              <strong>Communications:</strong> You can manage your communication
              preferences and opt-out of marketing communications.
            </li>
            <li>
              <strong>Location Information:</strong> You can manage your
              location sharing settings through your device permissions.
            </li>
            <li>
              <strong>Account Deletion:</strong> You can request to delete your
              FareShare account by contacting us.
            </li>
          </ul>

          <h2 class="section-title">6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information from unauthorized access, disclosure, or destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure, so we cannot guarantee absolute
            security.
          </p>

          <h2 class="section-title">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website and updating the effective date. Your continued use of the
            FareShare Platform after changes are made constitutes your
            acceptance of the revised policy.
          </p>

          <h2 class="section-title">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p>Email: privacy@fareshare.com</p>
          <p>
            Address: FareShare Inc., 1234 FareShare St, Suite 100, City, State,
            ZIP Code
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
