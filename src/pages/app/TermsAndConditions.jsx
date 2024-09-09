import React, { useState, useEffect } from "react";
import api from "../../api/apiInterceptor";

const TermsAndConditions = () => {
  // Terms:
  const [terms, setTerms] = useState(null);

  // const getTerms = async () => {
  //   const terms = await api.get("/policy/termsOfService");
  //   console.log(terms);
  // };

  // useEffect(() => {
  //   getTerms();
  // }, []);
  return (
    <div class=" flex flex-col w-full h-full overflow-y-auto justify-start items-start gap-2">
      <div class="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 class="section-title">FareShare LLC’s Terms of Service</h1>
        <p class="content">
          <strong>Last Updated: July 10, 2024</strong>
        </p>

        <p class="content">
          These Terms of Service constitute a legally binding agreement (the
          “Agreement”) between you and FareShare LLC, its parents, subsidiaries,
          representatives, affiliates, officers and directors (collectively,
          “FareShare,” “we,” “us” or “our”) governing your use of the FareShare
          applications, websites, technology, facilities, and platform
          (collectively, the “FareShare Platform”).
        </p>

        <p class="content">
          <strong>PLEASE BE ADVISED:</strong> THIS AGREEMENT CONTAINS PROVISIONS
          THAT GOVERN HOW CLAIMS BETWEEN YOU AND FARESHARE CAN BE BROUGHT (SEE
          SECTION 17 BELOW). THESE PROVISIONS WILL, WITH LIMITED EXCEPTION,
          REQUIRE YOU TO: (1) WAIVE YOUR RIGHT TO A JURY TRIAL, AND (2) SUBMIT
          CLAIMS YOU HAVE AGAINST FARESHARE TO BINDING AND FINAL ARBITRATION ON
          AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS,
          GROUP OR REPRESENTATIVE ACTION OR PROCEEDING. By entering into this
          Agreement, and/or by using or accessing the FareShare Platform, you
          expressly acknowledge that you understand this Agreement (including
          the dispute resolution and arbitration provisions in Section 17) and
          accept all of its terms. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS
          AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE OR ACCESS THE
          FARESHARE PLATFORM OR ANY OF THE SERVICES PROVIDED THROUGH THE
          FARESHARE PLATFORM.
        </p>

        <p class="content">
          If you are accessing or using the FareShare Platform to access or use
          FareShare Business services on behalf of an organization contracted
          with FareShare, and you are not accessing or using the FareShare
          Platform as a Rider or Driver, your access and use is governed by the
          contract between FareShare and your organization.
        </p>

        <h2 class="section-title">1. The FareShare Platform</h2>
        <p class="content">
          The FareShare Platform provides a marketplace where, among other
          things, persons who seek transportation to certain destinations
          (“Riders”) can be matched with transportation options to such
          destinations. One option for Riders is to request a ride from
          rideshare drivers who are driving to or through those destinations
          (“Drivers”). Drivers, Riders, and any other individuals, excluding any
          Excluded Individuals, using the FareShare Platform are collectively
          referred to herein as “Users,” and the driving services provided by
          Drivers to Riders, and other transportation related services provided
          by Drivers in connection with the FareShare Platform, shall be
          referred to herein as “Rideshare Services.” “FareShare Services” shall
          include any service provided by FareShare pursuant to the FareShare
          Platform (for clarity, FareShare Services does not include Rideshare
          Services or Third-Party Services).
        </p>

        <p class="content">
          As a User, you authorize FareShare to match and/or re-match you with
          Drivers or Riders based on factors such as your location, the
          requested pickup location, the estimated time to pickup, your
          destination, User preferences, ride mode, driver mode, membership
          status, regulatory or other third-party requirements, user statistics,
          and platform efficiency, and to cancel an existing match based on the
          same or other considerations. Any decision by a User to offer or
          accept Rideshare Services is a decision made in such User’s sole
          discretion. A separate agreement is formed between Drivers and Riders
          when the Rider accepts the Rideshare Services offered by the Driver.
        </p>

        <p class="content">
          As used herein, “Excluded Individuals” means any individual who is
          registering to use the FareShare Platform or whose use of the
          FareShare Platform is on behalf of an organization contracted with
          FareShare, except as a Rider or Driver. Your use of FareShare Services
          through the FareShare Platform may be subject to additional agreements
          between you and FareShare as applicable to the particular service in
          the particular market (“Supplemental Agreements”). Please review any
          applicable Supplemental Agreements carefully. IF YOU DO NOT AGREE TO
          BE BOUND BY THE TERMS AND CONDITIONS OF A SUPPLEMENTAL AGREEMENT, YOU
          MAY NOT RENT OR USE FARESHARE SERVICES IN SUCH MARKET. In the event of
          any conflict between this Agreement and the terms and conditions of
          any Supplemental Agreement, the terms of this Agreement shall control,
          unless such Supplemental Agreement specifically states otherwise.
        </p>

        <h2 class="section-title">2. Modification to the Agreement</h2>
        <p class="content">
          FareShare reserves the right to modify the terms and conditions of
          this Agreement, and such modifications shall be binding on you only
          upon your acceptance of the modified Agreement. Continued use of the
          FareShare Platform after any such changes shall constitute your
          acceptance of such changes. Unless material changes are made to the
          arbitration provisions herein, you agree that modification of this
          Agreement does not create a renewed opportunity to opt out of
          arbitration (if applicable).
        </p>

        <h2 class="section-title">3. Eligibility</h2>
        <p class="content">
          The FareShare Platform may only be used by individuals who have the
          right and authority to enter into this Agreement and are fully able
          and competent to satisfy the terms, conditions, and obligations
          herein. The FareShare Platform is not available to Users who have had
          their User account temporarily or permanently deactivated. You may not
          allow other persons to use your User account, you agree that you are
          the sole authorized user of your User account, and you may not use
          your User account on behalf of any third party, except as otherwise
          expressly permitted by FareShare. To use the FareShare Platform, each
          User shall create a User account. Each person may only create one User
          account, and FareShare reserves the right to deactivate any additional
          or duplicate accounts. Your participation in certain FareShare
          programs and use of certain FareShare services may be subject to
          additional eligibility requirements as determined by FareShare. By
          becoming a User, you represent and warrant that you are at least 18
          years old. Individuals under the age of 18 are not permitted to create
          FareShare User or Driver accounts. Persons found to have done so will
          be deactivated immediately. Any use of the FareShare Platform must be
          by an adult 18 years or older. Notwithstanding the foregoing, if you
          are the parent or legal guardian of a 16- or 17-year-old minor you may
          not create a User account for such minor to use the FareShare
          Platform.
        </p>

        <h2 class="section-title">4. Charges</h2>
        <p class="content">
          As a User, you understand that request or use of Rideshare Services,
          FareShare Services, or Third-Party Services may result in charges
          (“Charges”) to you and/or to an organization, if applicable. Charges
          to Riders and/or organizations, if applicable, for Rideshare Services
          include Fares (defined below) and other applicable fees, tolls,
          surcharges, and taxes, plus any tips to the Driver that you elect to
          pay. FareShare has the authority and reserves the right to determine
          and modify pricing quoting to you a price for a specific ride at the
          time you make a request. Pricing may vary based on the type of service
          you request as described within the FareShare Platform. You are
          responsible for reviewing the price quote within the FareShare
          Platform and shall be responsible for all Charges incurred under your
          User account regardless of your awareness of such Charges or the
          amounts thereof.
        </p>

        <h3 class="subsection-title">Rideshare Service Fares (“Fares”).</h3>
        <ul class="content list-item">
          <li>
            <strong>Quoted Fares:</strong> When you make a ride request using
            the FareShare Platform, FareShare will quote to you a Fare at the
            time of your request. The quote is subject to change until the ride
            request is confirmed. If your destination is not the same as the
            destination in your ride request, or the time or distance of your
            ride differs substantially from your quoted fare, or if you attempt
            to abuse the FareShare Platform, we may, at FareShare’s sole
            discretion and determination, cancel the fare quote and charge you a
            variable fare as described below. FareShare does not guarantee that
            the quoted fare price will be equal to a variable fare for the same
            ride. Quoted fares may include the Rideshare Service Fees and Other
            Charges below, as applicable.
          </li>
          <li>
            <strong>Variable Fares:</strong> Variable fares consist of a base
            charge and incremental charges based on the time and distance of
            your ride. For particularly short rides, minimum fares may apply.
            Please note that we use GPS data from your Driver’s phone to
            calculate the distance traveled on your ride. We cannot guarantee
            the availability or accuracy of GPS data. If we lose signal, we will
            calculate time and distance using available data from your ride. In
            addition to the variable fare, the total cost of your ride may
            include the Rideshare Service Fees and Other Charges below, as
            applicable.
          </li>
        </ul>

        <h3 class="subsection-title">
          Rideshare Service Fees and Other Charges.
        </h3>
        <ul class="content list-item">
          <li>
            <strong>Service Fee:</strong> FareShare may charge a “Service Fee”
            for each ride.
          </li>
          <li>
            <strong>Peak Time:</strong> At certain times, including times of
            high demand for Rideshare Services (“Peak Time”), you acknowledge
            that Charges may increase substantially. For quoted fares, we may
            factor Peak Time increases into the quoted price of the ride.
          </li>
          <li>
            <strong>Priority Pickup and Wait & Save:</strong> In some cases, you
            may be able to select an expected pick up that is faster or slower
            than standard for a higher or lower Fare, respectively.
          </li>
          <li>
            <strong>Cancellation Fee:</strong> After requesting a ride, you may
            cancel it through the FareShare Platform, but note that in certain
            cases a cancellation fee may apply. FareShare may also charge a fee
            if you fail to show up after requesting a ride.
          </li>
          <li>
            <strong>Damage Fee:</strong> If a Driver reports that you have
            materially damaged the Driver's vehicle, you agree to pay a “Damage
            Fee” of up to $250 depending on the extent of the damage (as
            determined by FareShare in its sole discretion), towards vehicle
            repair or cleaning. FareShare reserves the right (but is not
            obligated) to verify or otherwise require documentation of damages
            prior to processing the Damage Fee.
          </li>
          <li>
            <strong>Abuse Fee:</strong> If we receive a credible report that you
            have misused or abused the FareShare Platform, you agree to pay an
            “Abuse Fee” of up to $250 as determined by FareShare in its sole
            discretion. FareShare reserves the right (but is not obligated) to
            verify or otherwise require documentation of abuse prior to
            processing the Abuse Fee.
          </li>
          <li>
            <strong>Tolls:</strong> In some instances, tolls, toll estimates, or
            return tolls may apply to your ride. We do not guarantee that the
            amount charged by FareShare will match the toll charged to the
            Driver, if any.
          </li>
          <li>
            <strong>Other Charges:</strong> Other fees and surcharges may apply
            to your ride, including, but not limited to: actual or anticipated
            airport fees, state fees, local fees, event fees, fuel surcharges,
            wait time fees, or distance surcharges as determined by FareShare or
            its marketing partners. In addition, where required by law FareShare
            will collect applicable taxes.
          </li>
          <li>
            <strong>Tips:</strong> Following a ride, you may have the
            opportunity to elect to tip your Driver in cash or through a desired
            method of you and your drivers choosing. The FareShare Platform does
            not offer tip options through the FareShare Platform. It is the
            Drivers sole responsibility to keep track of tips they receive, and
            report tips earned when filing their taxes.
          </li>
        </ul>

        <h3 class="subsection-title">Charges Generally.</h3>
        <ul class="content list-item">
          <li>
            <strong>Facilitation of Charges:</strong> All Charges are
            facilitated through a third-party payment processor. FareShare may
            replace its third-party payment processor without notice to you.
            Apart from tips and funds deposited in the In-App Wallet of
            FareShare, cash payments are strictly prohibited unless expressly
            permitted by FareShare. Your payment of Charges to FareShare
            satisfies your payment obligation for your use of the FareShare
            Platform, FareShare Services, Third-Party Services, and Rideshare
            Services. Certain Charges may be collectively billed as a single
            purchase transaction to your selected payment method based on the
            payment frequency indicated in your settings. If your primary
            payment method expires, is invalid, or if Charges to your primary
            payment method are unable to be processed for whatever reason, then
            you agree that FareShare may charge your other available payment
            methods in the FareShare Platform. If you don't recognize a
            transaction, then check your ride receipts and payment history.
          </li>
          <li>
            <strong>No Refunds:</strong> All Charges are non-refundable except
            to the extent required by law. This no-refund policy shall apply at
            all times regardless of your decision to terminate usage of the
            FareShare Platform, any disruption to the FareShare Platform,
            FareShare Services, Third-Party Services, or Rideshare Services, or
            any other reason whatsoever.
          </li>
          <li>
            <strong>In-App Wallet:</strong> You may deposit funds in your In-App
            Wallet which you can apply toward payment of certain Charges. Funds
            in the In-App Wallet are valid only for use on the FareShare
            Platform and are not transferable or redeemable for cash except as
            required by law. If the cost of your Charges exceeds the applicable
            In-App Wallet value, we may charge your payment method on file for
            the Charges in excess of the In-App Wallet amount. With respect to
            Fares, FareShare may deduct the amount attributable to the Service
            Fee, Tolls, or Other Charges before application of the In-App
            Wallet.
          </li>
          <li>
            <strong>Supplemental Charges:</strong> Charges related to FareShare
            Services may be further detailed in the applicable Supplemental
            Agreement.
          </li>
          <li>
            <strong>Third-Party Charges:</strong> If you choose to purchase
            Third-Party Services (described further in Section 20) through the
            FareShare Platform, you authorize your payment method on file to be
            charged according to the pricing terms set by FareShare or the
            third-party provider, or as otherwise provided in the terms of the
            purchased services.
          </li>
          <li>
            <strong>Payment Card Authorization:</strong> Upon addition of a new
            payment method or each request for FareShare Services, Rideshare
            Services, or Third-Party Services, FareShare may seek authorization
            of your selected payment method to verify the payment method, ensure
            the Charges will be covered, and protect against unauthorized
            behavior. The authorization is not a charge, however, it may reduce
            your available credit by the authorization amount until your bank’s
            next processing cycle. Should the amount of our authorization exceed
            the total funds on deposit in your account, you may be subject to
            overdraft of NSF charges by the bank issuing your debit or prepaid
            card. FareShare is not responsible for these charges and is unable
            to assist you in recovering them from your issuing bank. For
            clarity, FareShare does not charge a fee for Users to access the
            FareShare Platform, but retains the right to charge Users and/or
            organizations, if applicable, a fee or any other Charge for
            accessing or using FareShare Services, Rideshare Services, or
            Third-Party Services made available through the FareShare Platform.
          </li>
        </ul>

        <h2 class="section-title">
          5. Driver Payments and Administrative Fees
        </h2>
        <p class="content">
          If you are a Driver, you will receive payment for your provision of
          Rideshare Services, specifically, one-hundred percent (100%) of the
          Fare and optional passenger tips. Further, you will receive a
          reoccurring bonus from Driver(s) that you caused, through a referral,
          to become a Driver in connection with the FareShare Platform upon
          their completion of a 30-day probationary period on the FareShare
          Platform. However, if one of those Drivers does not pay their
          Administrative fee, you will not receive a reoccurring bonus for that
          Driver. Drivers agree to automatically be charged administrative fees
          weekly to gain access to the FareShare Platform. Drivers who fail to
          pay their weekly administrative fees will immediately have their
          account deactivated and they must reapply to drive for the FareShare
          Platform. Drivers also acknowledge and agree that the FareShare
          Platform can increase or decrease administrative fees with or without
          prior written notice.
        </p>

        <h2 class="section-title">
          5. Driver Payments and Administrative Fees
        </h2>
        <p class="content">
          If you are a Driver, you will receive payment for your provision of
          Rideshare Services, specifically, one-hundred percent (100%) of the
          Fare and optional passenger tips. Further, you will receive a
          recurring bonus from Drivers that you referred to become a Driver in
          connection with the FareShare Platform upon their completion of a
          30-day probationary period. However, if one of those Drivers does not
          pay their Administrative fee, you will not receive a recurring bonus
          for that Driver. Drivers agree to automatically be charged
          administrative fees weekly to gain access to the FareShare Platform.
          Drivers who fail to pay their weekly administrative fees will
          immediately have their account deactivated and must reapply to drive
          for the FareShare Platform. Drivers also acknowledge and agree that
          the FareShare Platform can increase or decrease administrative fees
          with or without prior written notice.
        </p>

        <h2 class="section-title">6. FareShare Communications</h2>
        <p class="content">
          By entering into this Agreement or using the FareShare Platform, you
          agree to receive communications from us, our affiliates, or our
          third-party partners, at any of the phone numbers provided to
          FareShare by you or on your behalf, and via email, text message,
          calls, and push notifications. You agree that texts, calls, or
          prerecorded messages may be generated by automatic telephone dialing
          systems. Communications from FareShare, its affiliated companies
          and/or Drivers may include but are not limited to: operational
          communications concerning your User account or use of the FareShare
          Platform, FareShare Services, Third-Party Services, or Rideshare
          Services, updates concerning new and existing features on the
          FareShare Platform, communications concerning marketing or promotions
          run by us or our third-party partners, and news concerning FareShare
          and industry developments. If you change or deactivate the phone
          number you provided to FareShare, you agree to update your User
          account information to help prevent us from inadvertently
          communicating with anyone who acquires your old number. Standard text
          messaging charges applied by your cell phone carrier will apply to
          text messages we send. IF YOU WISH TO OPT OUT OF PROMOTIONAL EMAILS,
          YOU CAN UNSUBSCRIBE FROM OUR PROMOTIONAL EMAIL LIST BY FOLLOWING THE
          UNSUBSCRIBE OPTIONS IN THE PROMOTIONAL EMAIL ITSELF. YOU ACKNOWLEDGE
          THAT YOU ARE NOT REQUIRED TO CONSENT TO RECEIVE PROMOTIONAL TEXTS OR
          CALLS AS A CONDITION OF USING THE FARESHARE PLATFORM OR RELATED
          SERVICES.
        </p>

        <h2 class="section-title">7. Your Information</h2>
        <p class="content">
          Your Information is any information you provide, publish or post, and
          any information provided on your behalf, to or through the FareShare
          Platform (including any profile information you provide) or send to
          other Users (including via in-application feedback, any email feature,
          or through any FareShare-related Facebook, Twitter, or other social
          media posting) (your “Information”). You consent to us using your
          Information to create a User account that will allow you to use the
          FareShare Platform, FareShare Services, and participate in the
          Rideshare Services. Our collection and use of personal information in
          connection with the FareShare Platform, FareShare Services, and
          Rideshare Services is as provided in FareShare’s Privacy Policy. You
          are solely responsible for your Information and your interactions with
          other members of the public, and we act only as a passive conduit for
          your online posting of your Information. You agree to provide and
          maintain accurate, current, and complete Information and that we and
          other members of the public may rely on your Information as accurate,
          current, and complete. To enable FareShare to use your Information for
          the purposes described in the Privacy Policy and this Agreement, or to
          otherwise improve the FareShare Platform, FareShare Services, or
          Rideshare Services, you grant to us a non-exclusive, worldwide,
          perpetual, irrevocable, royalty-free, transferable, sub-licensable
          (through multiple tiers) right and license to exercise the copyright,
          publicity, and database rights you have in your Information, and to
          use, copy, perform, display and distribute such Information, to
          prepare derivative works, or incorporate into other works, such
          Information, in any media now known or not currently known. FareShare
          does not assert any ownership over your Information; rather, as
          between you and FareShare, subject to the rights granted to us in this
          Agreement, you retain full ownership of all of your Information and
          any intellectual property rights or other proprietary rights
          associated with your Information.
        </p>

        <h2 class="section-title">
          8. Promotions, Referrals, and Loyalty Programs
        </h2>
        <p class="content">
          FareShare, at its sole discretion, may make available promotions,
          referral programs, and loyalty programs with different features to any
          Users or prospective Users. FareShare reserves the right to withhold
          or deduct credits or benefits obtained through a promotion or program
          in the event that FareShare determines or believes that the redemption
          of the promotion or receipt of the credit or benefit was in error,
          fraudulent, illegal, or in violation of the applicable promotion or
          program terms or this Agreement. FareShare reserves the right to
          terminate, discontinue, modify or cancel any promotions or programs at
          any time and in its sole discretion without notice to you.
          Non-Emergency Medical Transport (NEMT) rides are deemed ineligible to
          participate in Promotions, Referrals, and Loyalty Programs. Driver and
          User accounts that have been suspended or deactivated forfeit rights
          to all credits or benefits obtained via promotions, referrals, and
          loyalty programs.
        </p>

        <h2 class="section-title">9. Restricted Activities</h2>
        <ul class="content list-item">
          <li>Impersonate any person or entity;</li>
          <li>
            Stalk, threaten, assault, or otherwise harass any person, or carry
            any weapons;
          </li>
          <li>
            Violate any law, statute, rule, permit, ordinance, or regulation;
          </li>
          <li>
            Interfere with or disrupt the FareShare Platform or the servers or
            networks connected to the FareShare Platform;
          </li>
          <li>
            Post Information or interact on the FareShare Platform, FareShare
            Services, Third-Party Services, or Rideshare Services in a manner
            that is fraudulent, libelous, abusive, obscene, profane, sexually
            oriented, harassing, or illegal;
          </li>
          <li>
            Use the FareShare Platform in any way that infringes any third
            party’s rights, including: intellectual property rights, copyright,
            patent, trademark, trade secret, or other proprietary rights or
            rights of publicity or privacy;
          </li>
          <li>
            Post, email, or otherwise transmit any malicious code, files, or
            programs designed to interrupt, damage, destroy, or limit the
            functionality of the FareShare Platform or any computer software or
            hardware or telecommunications equipment or surreptitiously
            intercept or expropriate any system, data, or personal information;
          </li>
          <li>
            Forge headers or otherwise manipulate identifiers in order to
            disguise the origin of any information transmitted through the
            FareShare Platform;
          </li>
          <li>
            “Frame” or “mirror” any part of the FareShare Platform, without our
            prior written authorization or use meta tags or code or other
            devices containing any reference to us in order to direct any person
            to any other website for any purpose;
          </li>
          <li>
            Modify, adapt, translate, reverse engineer, decipher, decompile, or
            otherwise disassemble any portion of the FareShare Platform;
          </li>
          <li>
            Rent, lease, lend, sell, redistribute, license, or sublicense the
            FareShare Platform or access to any portion of the FareShare
            Platform;
          </li>
          <li>
            Use any robot, spider, site search/retrieval application, or other
            manual or automatic device or process to retrieve, index, scrape,
            “data mine”, copy, access, acquire information, generate impressions
            or clicks, input or store information, search, monitor any portion
            of the FareShare Platform, or in any way reproduce or circumvent the
            navigational structure or presentation of the FareShare Platform or
            its contents;
          </li>
          <li>Link directly or indirectly to any other websites;</li>
          <li>
            Transfer, lend, or sell your User account, password, and/or
            identification, or any other User’s Information to any other party;
          </li>
          <li>
            Use a false email address or other identifying information,
            impersonate or misrepresent any person or entity, or your
            affiliation with any person or entity, or otherwise omit,
            misrepresent, or mislead as to the origin or source of any entity
            accessing the FareShare Platform;
          </li>
          <li>
            Discriminate against or harass anyone on the basis of race, national
            origin, religion, gender, gender identity or expression, physical or
            mental disability, medical condition, marital status, age, or sexual
            orientation;
          </li>
          <li>
            Violate any of the Referral Program rules if you participate in the
            Referral Program;
          </li>
          <li>
            Commercialize the Rideshare Services, Third-Party Services, or our
            FareShare Services without an agreement directly with FareShare;
          </li>
          <li>
            Misuse or abuse the Rideshare Services, Third-Party Services, or our
            FareShare Services in violation of eligibility requirements as
            determined by FareShare;
          </li>
          <li>
            Circumvent any measures implemented by FareShare to prevent or
            address violations of this Agreement;
          </li>
          <li>
            Cause any third party to engage in the restricted activities above;
          </li>
          <li>
            If an accident (i.e., vehicle collision) occurs during the
            transportation of a Rider, the Driver and Rider agree to pursue the
            Driver’s insurance company to seek any compensation for damage or
            injury. Driver and Rider agree not to pursue FareShare or its agents
            for compensation for such damage or injury;
          </li>
          <li>
            Rider(s) and organizations utilizing Non-Emergency Medical Transport
            (NEMT) services must cancel ride requests within four (4) hours of
            the scheduled pickup time and within two (2) minutes of requesting
            On-demand Non-Emergency Medical Transport (NEMT) services. Failing
            to do so can result in the suspension and/or removal of the Rider or
            organization from the FareShare Platform, including the use of the
            FareShare Platform.
          </li>
        </ul>

        <h2 class="section-title">
          10. Driver Representations, Warranties and Agreements
        </h2>
        <ul class="content list-item">
          <li>
            You possess a valid driver’s license and are authorized and
            medically fit to operate a motor vehicle and have all appropriate
            licenses, approvals, and authority to provide transportation to
            Riders in all jurisdictions in which you provide Rideshare Services;
          </li>
          <li>
            You own, or have the legal right to operate, the vehicle you use
            when providing Rideshare Services; such vehicle is in good operating
            condition and meets the industry safety standards and all applicable
            statutory and state department of motor vehicle requirements for a
            vehicle of its kind; and any and all applicable safety recalls have
            been or will be remedied per manufacturer instructions;
          </li>
          <li>
            You will not engage in reckless behavior while driving or otherwise
            providing Rideshare Services, drive unsafely, operate a vehicle that
            is unsafe to drive, permit an unauthorized third party to accompany
            you in the vehicle while providing Rideshare Services, provide
            Rideshare Services as a Driver while under the influence of alcohol
            or drugs, or take action that harms or threatens to harm the safety
            of the FareShare community or third parties;
          </li>
          <li>
            You will only provide Rideshare Services using the vehicle that has
            been reported to, and approved by FareShare, and you will not
            transport more passengers than can securely be seated in such
            vehicle (and no more than seven (7) passengers in any instance);
          </li>
          <li>
            You will not, while providing the Rideshare Services, operate as a
            public or common carrier or taxi service, accept street hails,
            charge for rides (except as expressly provided in this Agreement),
            demand that a rider pay in cash, or use a credit card reader, such
            as a Square Reader, to accept payment or engage in any other
            activity in a manner that is inconsistent with your obligations
            under this Agreement;
          </li>
          <li>
            You will not attempt to defraud FareShare or Riders on the FareShare
            Platform or in connection with your provision of Rideshare Services.
            If we suspect that you have engaged in fraudulent activity, we may
            withhold applicable Fares or other payments for the ride(s) in
            question and take any other action against you available under the
            law;
          </li>
          <li>
            You will not discriminate against Riders with disabilities per
            local, state, and federal law;
          </li>
          <li>
            You agree that we may obtain information about you, including your
            criminal and driving records, and you agree to provide any further
            necessary authorizations to facilitate our access to such records
            during the term of the Agreement;
          </li>
          <li>
            You have a valid policy of liability insurance (in coverage amounts
            consistent with all applicable legal requirements) that names or
            schedules you for the operation of the vehicle you use to provide
            Rideshare Services, and you agree to provide proof of such insurance
            and that information regarding such insurance may be released to
            FareShare upon FareShare’s reasonable request;
          </li>
          <li>
            You will pay all applicable federal, state, and local taxes based on
            your provision of Rideshare Services and any payments received by
            you;
          </li>
          <li>
            You will comply with FareShare’s reasonable requests to provide
            information in connection with Rider complaints, law enforcement
            requests, or any other incident;
          </li>
          <li>
            You agree to automatic administrative fees to be charged to you by
            FareShare on Tuesday of each week. The payment method that FareShare
            has on file will be charged the administrative fees;
          </li>
          <li>
            You will be prohibited from using the FareShare Platform if you do
            not pay the administrative fees to FareShare;
          </li>
          <li>
            You must maintain a preferability rating of seventy-five percent
            (75%) or higher. If you do not, you agree to be penalized;
          </li>
          <li>
            You may decline to provide a future ride request in the FareShare
            Platform to a Rider;
          </li>
          <li>
            You must take a full, uninterrupted six (6) hour break for every
            twelve (12) hours of driving in connection with the FareShare
            Platform;
          </li>
          <li>
            If you are providing a Non-Emergency Medical Transport (NEMT) ride,
            you cannot be more than thirty (30) minutes late in arriving to
            transport a Rider to or from a scheduled appointment. If you are
            more than thirty (30) minutes late, you agree to be penalized and to
            forfeit your payment for the ride;
          </li>
          <li>
            If you are providing a Non-Emergency Medical Transport (NEMT) ride,
            you cannot physically assist Rider(s) in entering and exiting your
            vehicle. However, you may assist with the Rider’s walker(s),
            wheelchair(s) or any other medical device. If you have been found to
            have physically assisted a Rider in entering and exiting your
            vehicle, at FareShare’s discretion you will be prohibited from using
            the FareShare Platform and agree to forfeit all bonuses;
          </li>
          <li>
            You must immediately report any accident, incident, or traffic
            citation to FareShare. Failure to do so will result in a
            prohibition, suspension, or deactivation of your use of the
            FareShare Platform and agree to forfeit all bonuses;
          </li>
          <li>
            You must maintain your own personal vehicle insurance coverage and
            current vehicle registration. If you fail to have insurance
            coverage, you will be prohibited from using the FareShare Platform;
          </li>
          <li>
            You cannot be under the influence of any drugs or alcohol while
            driving. If there is a suspicion you are under the influence while
            driving, you may be required to submit to immediate drug and alcohol
            testing at the sole discretion of FareShare. If you fail to comply
            with the testing, you will be prohibited from using the FareShare
            Platform, and you agree to forfeit all bonuses;
          </li>
          <li>
            You are to remain professional and maintain a neat and clean
            appearance and vehicle;
          </li>
          <li>Your vehicle may not be more than ten (10) years old;</li>
          <li>You must be eighteen (18) years or older;</li>
          <li>You must maintain a satisfactory driving record;</li>
          <li>You cannot exceed more than one legal moving violation;</li>
          <li>
            While transporting Rider(s), you must have a dash cam in the vehicle
            and such dash cam must be operating and recording. If an accident or
            incident occurs while driving on the FareShare Platform, you must
            save the recording, report, and submit the recording of the accident
            or incident to FareShare immediately upon request. If you fail to do
            so, you agree to be prohibited from using the FareShare Platform and
            forfeit all bonuses;
          </li>
          <li>
            You agree to not engage in sexual harassment, prejudice, racialism,
            and threats on the FareShare Platform. If you do engage in such
            behavior(s), you will be prohibited from using the FareShare
            Platform and agree to forfeit all bonuses;
          </li>
          <li>
            In the event that the “End Ride” function of the FareShare Platform
            is activated during a ride, you will immediately end the ride by
            stopping the vehicle in a safe location to permit the Rider(s) to
            safely exit the vehicle. After the Rider(s) have exited the vehicle,
            you agree to immediately report such incident to FareShare and
            provide a copy of any audio and video recording(s) of such incident
            that is in your possession, custody, or control to FareShare. You
            agree that your failure to conduct yourself in accordance with this
            paragraph (1) will result in a forfeiture of any applicable bonus,
            (2) will permit FareShare to immediately deactivate your account
            from the FareShare Platform, and (3) will result in payment to you
            of the Rideshare Services for only the portion of the ride that was
            provided to the Rider(s).
          </li>
        </ul>

        <h2 class="section-title">11. Intellectual Property</h2>
        <ul class="content list-item">
          <li>
            All intellectual property rights in and to the FareShare Platform
            shall be owned by FareShare absolutely and in their entirety. These
            rights include database rights, inventions and patentable
            subject-matter, patents, copyright, design rights (whether
            registered or unregistered), trademarks (whether registered or
            unregistered) and other similar rights wherever existing in the
            world together with the right to apply for protection of the same.
          </li>
          <li>
            All other trademarks, logos, service marks, company or product names
            set forth in the FareShare Platform are the property of their
            respective owners.
          </li>
          <li>
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback or other information (“Submissions”) provided by you
            to us are non-confidential and shall become the sole property of
            FareShare. FareShare shall own exclusive rights, including all
            intellectual property rights, and shall be entitled to the
            unrestricted use and dissemination of these Submissions for any
            purpose, commercial or otherwise, without acknowledgment or
            compensation to you.
          </li>
          <li>
            Except for the explicit license grants hereunder, nothing in this
            Agreement shall be construed to transfer ownership of or grant a
            license under any intellectual property rights.
          </li>
          <li>
            FARESHARE and other FareShare logos, designs, graphics, icons,
            scripts and service names are registered trademarks, trademarks or
            trade dress of FareShare in the United States and/or other countries
            (collectively, the “FareShare Marks”).
          </li>
          <li>
            If you provide Rideshare Services as a Driver, FareShare grants to
            you, during the term of this Agreement, and subject to your
            compliance with the terms and conditions of this Agreement, a
            limited, revocable, non-exclusive license to display and use the
            FareShare Marks solely on the FareShare stickers/decals, and any
            other FareShare-branded items provided by FareShare directly to you
            in connection with providing the Rideshare Services (“License”).
          </li>
          <li>
            The License is non-transferable and non-assignable, and you shall
            not grant to any third party any right, permission, license or
            sublicense with respect to any of the rights granted hereunder
            without FareShare’s prior written permission, which it may withhold
            in its sole discretion.
          </li>
          <li>
            The FareShare logo (or any FareShare Marks) may not be used in any
            manner that is likely to cause confusion, including but not limited
            to: use of a FareShare Mark in a domain name or FareShare referral
            code, or use of a FareShare Mark as a social media handle or name,
            avatar, profile photo, icon, favicon, or banner.
          </li>
          <li>
            You may identify yourself as a Driver on the FareShare Platform, but
            may not misidentify yourself as FareShare, an employee of FareShare,
            or a representative or agent of FareShare.
          </li>
          <li>
            You acknowledge that FareShare is the owner and licensor of the
            FareShare Marks, including all goodwill associated therewith, and
            that your use of the FareShare logo (or any FareShare Marks) will
            confer no interest in or ownership of the FareShare Marks in you but
            rather inures to the benefit of FareShare.
          </li>
          <li>
            You agree to immediately cease any use that FareShare determines to
            be nonconforming or otherwise unacceptable.
          </li>
          <li>
            You agree that you will not: (1) create any materials that use the
            FareShare Marks or any derivatives of the FareShare Marks as a
            trademark, service mark, trade name or trade dress, other than as
            expressly approved by FareShare in writing; (2) use the FareShare
            Marks in any way that tends to impair their validity as proprietary
            trademarks, service marks, trade names or trade dress, or use the
            FareShare Marks other than in accordance with the terms, conditions
            and restrictions herein; (3) take any other action that would
            jeopardize or impair FareShare’s rights as owner of the FareShare
            Marks or the legality and/or enforceability of the FareShare Marks,
            including, challenging or opposing FareShare’s ownership in the
            FareShare Marks; (4) apply for trademark registration or renewal of
            trademark registration of any of the FareShare Marks, any derivative
            of the FareShare Marks, any combination of the FareShare Marks and
            any other name, or any trademark, service mark, trade name, symbol
            or word which is similar to the FareShare Marks; (5) use the
            FareShare Marks on or in connection with any product, service or
            activity that is in violation of any law, statute, government
            regulation or standard.
          </li>
          <li>
            Violation of any provision of this License may result in immediate
            termination of the License, in FareShare’s sole discretion, a
            takedown request sent to the appropriate ISP, or social media
            platform, and/or a Uniform Domain-Name Dispute-Resolution Policy
            Proceeding (or equivalent proceeding).
          </li>
          <li>
            If you create any materials (physical or digital) bearing the
            FareShare Marks (in violation of this Agreement or otherwise), you
            agree that upon their creation FareShare exclusively owns all right,
            title and interest in and to such materials, including any
            modifications to the FareShare Marks or derivative works based on
            the FareShare Marks or FareShare copyrights. You further agree to
            assign, and do hereby assign, any interest or right you may have in
            such materials to FareShare, and to provide information and execute
            any documents as reasonably requested by FareShare to enable
            FareShare to formalize such assignment.
          </li>
        </ul>

        <h2 class="section-title">12. Disclaimers</h2>
        <ul class="content list-item">
          <li>
            The following disclaimers are made on behalf of FareShare, our
            affiliates, subsidiaries, parents, successors and assigns, and each
            of our respective officers, directors, employees, agents, and
            shareholders.
          </li>
          <li>
            It is up to the Driver to decide whether or not to offer a ride to a
            Rider contacted through the FareShare Platform, and it is up to the
            Rider to decide whether or not to accept a ride from any Driver
            contacted through the FareShare Platform. We cannot ensure that a
            Driver or Rider will complete an arranged transportation service.
          </li>
          <li>
            We have no control over the quality or safety of the transportation
            that occurs as a result of the Rideshare Services. Any
            safety-related feature, process, policy, standard, or other effort
            undertaken by FareShare is not an indication of any employment or
            agency relationship with any User.
          </li>
          <li>
            The FareShare Platform is provided on an “as is” basis and without
            any warranty or condition, express, implied or statutory. We do not
            guarantee and do not promise any specific results from use of the
            FareShare Platform, FareShare Services, Third-Party Services, and/or
            the Rideshare Services, including the ability to provide or receive
            Rideshare Services at any given location or time.
          </li>
          <li>
            FareShare reserves the right, for example, to limit or eliminate
            access to the FareShare Platform for Rideshare Services, Third-Party
            Services, and/or FareShare Services in specific geographic areas
            and/or at specific times based on commercial viability, public
            health concerns, or changes in law.
          </li>
          <li>
            To the fullest extent permitted by law, we specifically disclaim any
            implied warranties of title, merchantability, fitness for a
            particular purpose and non-infringement. Some states do not allow
            the disclaimer of implied warranties, so the foregoing disclaimer
            may not apply to you.
          </li>
          <li>
            We do not warrant that your use of the FareShare Platform, FareShare
            Services, Third-Party Services, or Rideshare Services will be
            accurate, complete, reliable, current, secure, uninterrupted, always
            available, or error-free, or will meet your requirements, that any
            defects in the FareShare Platform will be corrected, or that the
            FareShare Platform is free of viruses or other harmful components.
          </li>
          <li>
            We disclaim liability for, and no warranty is made with respect to,
            connectivity, availability, accuracy, completeness, and reliability
            of the FareShare Platform, FareShare Services, Third-Party Services,
            or Rideshare Services, including with respect to mapping,
            navigation, estimated times of arrival, and routing services.
          </li>
          <li>
            You are responsible at all times for your conduct and the
            consequences of your conduct while using the FareShare Platform. We
            cannot guarantee that each Rider or Driver is who he or she claims
            to be. Please use common sense when using the FareShare Platform,
            FareShare Services, Third-Party Services, and Rideshare Services,
            including looking at the photos of the Driver or Rider you have
            matched with to make sure it is the same individual you see in
            person.
          </li>
          <li>
            Please note that there are also risks of dealing with underage
            persons or people acting under false pretense, and we do not accept
            responsibility or liability for any content, communication or other
            use or access of the FareShare Platform by persons under the age of
            18 in violation of this Agreement.
          </li>
          <li>
            We encourage you to communicate directly with each potential Driver
            or Rider prior to engaging in an arranged transportation service.
            FareShare is not responsible for the conduct, whether online or
            offline, of any User of the FareShare Platform, FareShare Services,
            Third-Party Services, or Rideshare Services. You are solely
            responsible for your interactions with other Users.
          </li>
          <li>
            We do not procure insurance for, nor are we responsible for,
            personal belongings left in the car by Drivers or Riders. By using
            the FareShare Platform, FareShare Services, Third-Party Services,
            and participating in the Rideshare Services, you agree to accept
            such risks and agree that FareShare is not responsible for the acts
            or omissions of Users on the FareShare Platform, FareShare Services,
            Third-Party Services, or participating in the Rideshare Services.
          </li>
          <li>
            You are responsible for the use of your User account and FareShare
            expressly disclaims any liability arising from the unauthorized use
            of your User account.
          </li>
          <li>
            It is possible for others to obtain information about you that you
            provide, publish or post to or through the FareShare Platform
            (including any profile information you provide), send to other
            Users, or share during the Rideshare Services, and to use such
            information to harass or harm you. We are not responsible for the
            use of any personal information that you disclose to other Users on
            the FareShare Platform or through the Rideshare Services, FareShare
            Services, or Third-Party Services. Please carefully select the type
            of information that you post on the FareShare Platform or through
            the Rideshare Services, FareShare Services, or Third-Party Services
            or release to others.
          </li>
          <li>
            We disclaim all liability, regardless of the form of action, for the
            acts or omissions of other Users (including unauthorized users, or
            “hackers”). Opinions, advice, statements, offers, or other
            information or content concerning FareShare or made available
            through the FareShare Platform, but not directly by us, are those of
            their respective authors, and should not necessarily be relied upon.
            Such authors are solely responsible for such content.
          </li>
          <li>
            Under no circumstances will we be responsible for any loss or damage
            resulting from your reliance on information or other content posted
            by third parties, whether on the FareShare Platform or otherwise. We
            reserve the right, but we have no obligation, to monitor the
            materials posted on the FareShare Platform and remove any such
            material that in our sole opinion violates, or is alleged to
            violate, the law or this agreement or which might be offensive,
            illegal, or that might violate the rights, harm, or threaten the
            safety of Users or others.
          </li>
          <li>
            Location data provided by the FareShare Platform is for basic
            location purposes only and is not intended to be relied upon in
            situations where precise location information is needed or where
            erroneous, inaccurate or incomplete location data may lead to death,
            personal injury, property or environmental damage. Neither
            FareShare, nor any of its content providers, guarantees the
            availability, accuracy, completeness, reliability, or timeliness of
            location data tracked or displayed by the FareShare Platform.
          </li>
          <li>
            Any of your Information, including geolocational data, you upload,
            provide, or post on the FareShare Platform may be accessible to
            FareShare and certain Users of the FareShare Platform. FareShare
            advises you to use the FareShare Platform with a data plan with
            unlimited or very high data usage limits, and FareShare shall not be
            responsible or liable for any fees, costs, or overage charges
            associated with any data plan you use to access the FareShare
            Platform.
          </li>
          <li>
            FareShare shall not be in breach of this Agreement nor liable for
            failure or delay in performing obligations under this Agreement if
            such failure or delay results from events, circumstances or causes
            beyond its reasonable control including (without limitation) natural
            disasters or acts of God; labor disputes or stoppages; war;
            government action; epidemic or pandemic; chemical or biological
            contamination; strikes; riots; acts of domestic or international
            terrorism; quarantines; national or regional emergencies; or any
            other cause, whether similar in kind to the foregoing or otherwise,
            beyond the party’s reasonable control. All service dates under this
            Agreement affected by force majeure shall be tolled for the duration
            of such force majeure. The parties hereby agree, when feasible, not
            to cancel but reschedule the pertinent obligations as soon as
            practicable after the force majeure condition ceases to exist.
          </li>
        </ul>

        <h2 class="section-title">13. Driver and Rider Penalties</h2>
        <ul class="content list-item">
          <li>
            A Driver may be subject to a penalty as described in this Agreement.
            The penalty can be one of three levels:
            <ul class="list-item">
              <li>
                Level 1: The Driver is placed in suspension for one (1) week and
                will not receive any ride assignments during this time.
              </li>
              <li>
                Level 2: The Driver is placed in suspension for two (2) weeks
                and will not receive any ride assignments during this time.
              </li>
              <li>
                Level 3: The Driver is removed from the FareShare Platform.
              </li>
            </ul>
          </li>
          <li>
            Drivers who have been placed on suspension are still required to pay
            full administrative fees amount, failing to do so will result in
            account deactivation.
          </li>
          <li>
            A Rider may be subject to a penalty as described in this Agreement.
            The penalty can be one of two levels:
            <ul class="list-item">
              <li>
                Level 1: The Rider is suspended from the FareShare Platform for
                between thirty (30) to ninety (90) days.
              </li>
              <li>
                Level 2: The Rider is prohibited from using the FareShare
                Platform.
              </li>
            </ul>
          </li>
          <li>
            Riders whose accounts have been suspended or deactivated forfeit
            their right to any and all cash back bonus credits.
          </li>
        </ul>

        <h2 class="section-title">14. Indemnity</h2>
        <ul class="content list-item">
          <li>
            You will indemnify and hold harmless and, at FareShare’s election,
            defend FareShare including our affiliates, subsidiaries, parents,
            successors and assigns, and each of our respective officers,
            directors, employees, agents, or shareholders (collectively, the
            “Indemnified Parties”) from and against any claims, actions, suits,
            losses, costs, liabilities and expenses (including reasonable
            attorneys’ fees) relating to or arising out of your use of the
            FareShare Platform, FareShare Services, Third-Party Services, and
            participation in the Rideshare Services, including:
          </li>
          <ul class="list-item">
            <li>
              (1) your breach of this Agreement or the documents it incorporates
              by reference;
            </li>
            <li>
              (2) your violation of any law or the rights of a third party,
              including, Drivers, Riders, other motorists, and pedestrians, as a
              result of your own interaction with such third party;
            </li>
            <li>
              (3) any allegation that any materials or Information that you
              submit to us or transmit through the FareShare Platform or to us
              infringes, misappropriates, or otherwise violates the copyright,
              trademark, trade secret or other intellectual property or other
              rights of any third party;
            </li>
            <li>
              (4) your ownership, use or operation of a motor vehicle or
              passenger vehicle, including your provision of Rideshare Services
              as a Driver; and/or
            </li>
            <li>
              (5) any other activities in connection with the FareShare
              Platform, FareShare Services, Third-Party Services, or Rideshare
              Services.
            </li>
          </ul>
          <li>
            This indemnity shall be applicable without regard to the negligence
            of any party, including any indemnified person.
          </li>
          <li>
            You will not, without FareShare’s prior written consent, agree to
            any settlement on behalf of any Indemnified Party which includes
            either the obligation to pay any monetary amounts, or any admissions
            of liability, whether civil or criminal, on the part of any
            Indemnified Party.
          </li>
        </ul>

        <h2 class="section-title">15. Limitation of Liability</h2>
        <ul class="content list-item">
          <li>
            IN NO EVENT WILL FARESHARE, INCLUDING OUR AFFILIATES, SUBSIDIARIES,
            PARENTS, SUCCESSORS AND ASSIGNS, AND EACH OF OUR RESPECTIVE
            OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS
            (COLLECTIVELY “FARESHARE” FOR PURPOSES OF THIS SECTION), BE LIABLE
            TO YOU FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE,
            CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING DAMAGES FOR DELETION,
            CORRUPTION, LOSS OF DATA, LOSS OF PROGRAMS, FAILURE TO STORE ANY
            INFORMATION OR OTHER CONTENT MAINTAINED OR TRANSMITTED BY THE
            FARESHARE PLATFORM, SERVICE INTERRUPTIONS, OR FOR THE COST OF
            PROCUREMENT OF SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION
            WITH THE FARESHARE PLATFORM, FARESHARE SERVICES, THE RIDESHARE
            SERVICES, OR THIS AGREEMENT, HOWEVER ARISING INCLUDING NEGLIGENCE,
            EVEN IF WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </li>
          <li>
            THE FARESHARE PLATFORM MAY BE USED BY YOU TO REQUEST AND SCHEDULE
            TRANSPORTATION, GOODS, OR THIRD-PARTY SERVICES WITH THIRD-PARTY
            PROVIDERS, BUT YOU AGREE THAT FARESHARE HAS NO RESPONSIBILITY OR
            LIABILITY TO YOU RELATED TO ANY TRANSPORTATION, GOODS, OR
            THIRD-PARTY SERVICES SET FORTH IN THIS AGREEMENT.
          </li>
          <li>
            FOR CLARITY AND WITHOUT LIMITING THE FOREGOING, FARESHARE HAS NO
            RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES ARISING OUT OF OR IN
            CONNECTION WITH YOUR USE OF OR RELIANCE ON TRANSPORTATION, GOODS, OR
            THIRD-PARTY SERVICES SET FORTH IN THIS AGREEMENT OR ANY TRANSACTION
            OR RELATIONSHIP BETWEEN YOU AND ANY THIRD-PARTY PROVIDER. CERTAIN
            JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN
            DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
            DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU
            MAY HAVE ADDITIONAL RIGHTS.
          </li>
          <li>FareShare provides no refund on any services it provides.</li>
          <li>
            Further, neither FareShare, nor the Drivers on the FareShare
            Platform are responsible for lost or left items in a Driver’s
            vehicle.
          </li>
        </ul>

        <div class="content">
          <div class="section-title">16. Term and Termination</div>
          <div class="content">
            This Agreement is effective upon your acceptance of this Agreement.
            This Agreement may be terminated:
            <ul class="list-item">
              <li>
                (a) by User, without cause, upon seven (7) days’ prior written
                notice to FareShare; or
              </li>
              <li>
                (b) by either Party immediately, without notice, upon the other
                Party’s material breach of this Agreement.
              </li>
            </ul>
            In addition, FareShare may terminate this Agreement or deactivate
            your User account immediately in the event:
            <ul class="list-item">
              <li>(1) you are no longer eligible to qualify as a User;</li>
              <li>
                (2) you no longer qualify to provide Rideshare Services or to
                operate the approved vehicle under applicable law, rule, permit,
                ordinance or regulation; or
              </li>
              <li>
                (3) FareShare has the good faith belief that such action is
                necessary to protect the safety of the FareShare community or
                third parties, provided that in the event of a deactivation
                pursuant to (1)-(3) above, you will be given notice of the
                potential or actual deactivation and an opportunity to attempt
                to cure the issue to FareShare’s reasonable satisfaction prior
                to FareShare permanently terminating the Agreement.
              </li>
            </ul>
            For all other breaches of this Agreement, you will be provided
            notice and an opportunity to cure the breach. If the breach is cured
            in a timely manner and to FareShare’s satisfaction, this Agreement
            will not be permanently terminated. Sections 2, 6, 7 (with respect
            to the license), 11-12, 14-19, and 21 shall survive any termination
            or expiration of this Agreement.
          </div>

          <div class="section-title">
            17. DISPUTE RESOLUTION AND ARBITRATION AGREEMENT
          </div>

          <div class="subsection-title">
            (a) Agreement to Binding Arbitration Between You and FareShare
          </div>
          <div class="content">
            YOU AND FARESHARE MUTUALLY AGREE TO WAIVE OUR RESPECTIVE RIGHTS TO
            RESOLUTION OF DISPUTES IN A COURT OF LAW BY A JUDGE OR JURY AND
            AGREE TO RESOLVE ANY DISPUTE BY ARBITRATION, as set forth below.
            This agreement to arbitrate (“Arbitration Agreement”) is governed by
            the Federal Arbitration Act (“FAA”); but if the FAA is inapplicable
            for any reason, then this Arbitration Agreement is governed by the
            laws of the State of Texas, without regard to choice of law
            principles. This Arbitration Agreement survives after the Agreement
            terminates or your relationship with FareShare ends. ANY ARBITRATION
            UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS
            ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED. Except as
            expressly provided below, this Arbitration Agreement applies to all
            Claims (defined below) between you and FareShare, including our
            affiliates, subsidiaries, parents, successors and assigns, and each
            of our respective officers, directors, employees, agents, or
            shareholders. This Arbitration Agreement also applies to claims
            between you and FareShare’s service providers, including but not
            limited to background check providers and payment processors; and
            such service providers shall be considered intended third-party
            beneficiaries of this Arbitration Agreement. Except as expressly
            provided below, ALL DISPUTES AND CLAIMS BETWEEN US (EACH A “CLAIM”
            AND COLLECTIVELY, “CLAIMS”) SHALL BE EXCLUSIVELY RESOLVED BY BINDING
            ARBITRATION SOLELY BETWEEN YOU AND FARESHARE. These Claims include,
            but are not limited to, any dispute, claim or controversy, whether
            based on past, present, or future events, arising out of or relating
            to: this Agreement and prior versions thereof (including the breach,
            termination, enforcement, interpretation or validity thereof), the
            FareShare Platform, the Rideshare Services, the FareShare Services,
            or any other goods or services made available through the FareShare
            Platform by FareShare or a third-party provider, your relationship
            with FareShare, the threatened or actual suspension, deactivation or
            termination of your User Account or this Agreement, background
            checks performed by or on FareShare’s behalf, payments made by you
            or any payments made or allegedly owed to you, any promotions or
            offers made by FareShare, any city, county, state or federal
            wage-hour law, trade secrets, unfair competition, compensation,
            breaks and rest periods, expense reimbursement, wrongful
            termination, discrimination, harassment, retaliation, fraud,
            defamation, emotional distress, breach of any express or implied
            contract or covenant, claims arising under federal or state consumer
            protection laws; claims arising under antitrust laws, claims arising
            under the Telephone Consumer Protection Act and Fair Credit
            Reporting Act; and claims arising under the Uniform Trade Secrets
            Act, Civil Rights Act of 1964, Americans With Disabilities Act, Age
            Discrimination in Employment Act, Older Workers Benefit Protection
            Act, Family Medical Leave Act, Fair Labor Standards Act, Employee
            Retirement Income Security Act of 1974, and state statutes, if any,
            addressing the same or similar subject matters, and all other
            federal and state statutory and common law claims. All disputes
            concerning the arbitrability of a Claim (including disputes about
            the scope, applicability, enforceability, revocability or validity
            of the Arbitration Agreement) shall be decided by the arbitrator,
            except as expressly provided below. BY AGREEING TO ARBITRATION, YOU
            UNDERSTAND THAT YOU AND FARESHARE ARE WAIVING THE RIGHT TO SUE IN
            COURT OR HAVE A JURY TRIAL FOR ALL CLAIMS, EXCEPT AS EXPRESSLY
            OTHERWISE PROVIDED IN THIS ARBITRATION AGREEMENT. This Arbitration
            Agreement is intended to require arbitration of every claim or
            dispute that can lawfully be arbitrated, except for those claims and
            disputes which by the terms of this Arbitration Agreement are
            expressly excluded from the requirement to arbitrate.
          </div>

          <div class="subsection-title">
            (b) Prohibition of Class Actions and Non-Individualized Relief
          </div>
          <div class="content">
            YOU UNDERSTAND AND AGREE THAT YOU AND FARESHARE MAY EACH BRING
            CLAIMS IN ARBITRATION AGAINST THE OTHER ONLY IN AN INDIVIDUAL
            CAPACITY AND NOT ON A CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE
            BASIS (“CLASS ACTION WAIVER”). YOU UNDERSTAND AND AGREE THAT YOU AND
            FARESHARE BOTH ARE WAIVING THE RIGHT TO PURSUE OR HAVE A DISPUTE
            RESOLVED AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
            COLLECTIVE OR REPRESENTATIVE PROCEEDING. NOTWITHSTANDING THE
            FOREGOING, THIS SUBSECTION (B) SHALL NOT APPLY TO REPRESENTATIVE
            PRIVATE ATTORNEYS GENERAL ACT CLAIMS BROUGHT AGAINST FARESHARE,
            WHICH ARE ADDRESSED SEPARATELY IN SECTION 17(C). The arbitrator
            shall have no authority to consider or resolve any Claim or issue
            any relief on any basis other than an individual basis. The
            arbitrator shall have no authority to consider or resolve any Claim
            or issue any relief on a class, collective, or representative basis.
            The arbitrator may award declaratory or injunctive relief only in
            favor of the individual party seeking relief and only to the extent
            necessary to provide relief warranted by that party's individual
            claims. Notwithstanding any other provision of this Agreement, the
            Arbitration Agreement or the AAA Rules, disputes regarding the
            interpretation, applicability, or enforceability of the Class Action
            Waiver may be resolved only by a court and not by an arbitrator. In
            any case in which: (1) the dispute is filed as a class, collective,
            or representative action and (2) there is a final judicial
            determination that the Class Action Waiver is unenforceable with
            respect to any Claim or any particular remedy for a Claim (such as a
            request for public injunctive relief), then that Claim or particular
            remedy (and only that Claim or particular remedy) shall be severed
            from any remaining claims and/or remedies and may be brought in a
            court of competent jurisdiction, but the Class Action Waiver shall
            be enforced in arbitration on an individual basis as to all other
            Claims or remedies to the fullest extent possible.
          </div>

          <div class="subsection-title">(c) Representative PAGA Waiver</div>
          <div class="content">
            Notwithstanding any other provision of this Agreement or the
            Arbitration Agreement, to the fullest extent permitted by law: (1)
            you and FareShare agree not to bring a representative action on
            behalf of others under the Private Attorneys General Act of 2004
            (“PAGA”), California Labor Code § 2698 et seq., in any court or in
            arbitration, and (2) for any claim brought on a private attorney
            general basis, including under the California PAGA, both you and
            FareShare agree that any such dispute shall be resolved in
            arbitration on an individual basis only and not on a representative
            basis.
          </div>

          <div class="subsection-title">
            (d) Pre-Arbitration Claim Resolution
          </div>
          <div class="content">
            Before you or FareShare commence arbitration, the party seeking to
            resolve a Claim must first send a written notice of the Claim to the
            other party describing the basis of the Claim and the relief sought.
            Notice to FareShare should be sent to FareShare, Inc., Attn: Legal
            Department, 1234 FareShare Lane, Austin, TX 78701. The notice must
            be sent within the applicable statute of limitations period. If we
            do not reach an agreement to resolve the Claim within 30 days after
            the notice is received, then either party may proceed to
            arbitration. During this pre-arbitration period, you and FareShare
            will attempt to resolve the Claim through informal dispute
            resolution before commencing any formal arbitration proceedings.
          </div>

          <div class="subsection-title">(e) Initiation of Arbitration</div>
          <div class="content">
            To commence an arbitration proceeding, you or FareShare must provide
            written notice of the Claim to the other party. The arbitration will
            be conducted by the American Arbitration Association (“AAA”) under
            its Commercial Arbitration Rules and the Supplementary Procedures
            for Consumer Related Disputes. The AAA Rules and forms are available
            online at www.adr.org. The arbitrator will be selected in accordance
            with the AAA Rules.
          </div>

          <div class="subsection-title">
            (f) Arbitration Procedures and Fees
          </div>
          <div class="content">
            The arbitration shall be conducted by a single arbitrator, and the
            arbitrator’s decision and award shall be final and binding on the
            parties. The arbitrator will have the authority to award the same
            damages and relief that a court could award, except as otherwise
            expressly provided in this Agreement. Each party shall bear its own
            costs and expenses, including legal fees, in connection with the
            arbitration, except that FareShare will pay for your filing fee and
            the arbitrator’s fee if you are the prevailing party in the
            arbitration.
          </div>

          <div class="subsection-title">
            (g) No Prejudice to Right to Seek Injunctive Relief
          </div>
          <div class="content">
            Notwithstanding anything to the contrary in this Arbitration
            Agreement, you or FareShare may seek any injunctive relief to
            preserve the status quo or protect intellectual property rights or
            confidential information from an appropriate court.
          </div>

          <div class="subsection-title">(h) Small Claims Court</div>
          <div class="content">
            Notwithstanding the foregoing, either party may bring an individual
            action in small claims court for disputes or claims within the scope
            of the small claims court’s jurisdiction.
          </div>

          <div class="subsection-title">(i) Survival</div>
          <div class="content">
            This Arbitration Agreement will survive any termination or
            expiration of your relationship with FareShare.
          </div>
        </div>
        <div class="section-title">18. Confidentiality</div>
        <div class="content">
          You agree not to use any technical, financial, strategic and other
          proprietary and confidential information relating to FareShare’s
          business, operations and properties, information about a User made
          available to you in connection with such User’s use of the FareShare
          Platform, which may include the User’s name, pick-up location, contact
          information and photo (“Confidential Information”) disclosed to you by
          FareShare for your own use or for any purpose other than as
          contemplated herein. You shall not disclose or permit disclosure of
          any Confidential Information to third parties, and you agree not to
          store separate and outside of the FareShare Platform any Confidential
          Information obtained from the FareShare Platform. As a Driver, you
          understand that some of the Confidential Information you receive may
          be protected by federal and/or state confidentiality laws, such as the
          Health Information Portability and Accountability Act of 1996
          (“HIPAA”), governing the privacy and security of protected (patient)
          health information. In the event that you know a Rider, you should not
          disclose to anyone the identity of the Rider or the location that you
          picked up, or dropped off the Rider, as this could violate HIPAA. You
          understand that any violation of the Agreement’s confidentiality
          provisions may violate HIPAA or state confidentiality laws and could
          result in civil or criminal penalties against you. You agree to take
          all reasonable measures to protect the secrecy of and avoid disclosure
          or use of Confidential Information of FareShare in order to prevent it
          from falling into the public domain. Notwithstanding the above, you
          shall not have liability to FareShare with regard to any Confidential
          Information which you can prove:
          <ul class="list-item">
            <li>
              was in the public domain at the time it was disclosed by FareShare
              or has entered the public domain through no fault of yours;
            </li>
            <li>
              was known to you, without restriction, at the time of disclosure,
              as demonstrated by files in existence at the time of disclosure;
            </li>
            <li>is disclosed with the prior written approval of FareShare;</li>
            <li>
              becomes known to you, without restriction, from a source other
              than FareShare without breach of this Agreement by you and
              otherwise not in violation of FareShare’s rights; or
            </li>
            <li>
              is disclosed pursuant to the order or requirement of a court,
              administrative agency, or other governmental body; provided,
              however, that you shall provide prompt notice of such court order
              or requirement to FareShare to enable FareShare to seek a
              protective order or otherwise prevent or restrict such disclosure.
            </li>
          </ul>
        </div>

        <div class="section-title">19. Relationship with FareShare</div>
        <div class="content">
          As a Driver on the FareShare Platform, you acknowledge and agree that
          you and FareShare are in a direct business relationship, and the
          relationship between the parties under this Agreement is solely that
          of independent contracting parties. You and FareShare expressly agree
          that:
          <ul class="list-item">
            <li>
              this is not an employment agreement and does not create an
              employment relationship between you and FareShare; and
            </li>
            <li>
              no joint venture, franchisor-franchisee, partnership, or agency
              relationship is intended or created by this Agreement.
            </li>
          </ul>
          You have no authority to bind FareShare, and you undertake not to hold
          yourself out as an employee, agent or authorized representative of
          FareShare. FareShare does not, and shall not be deemed to, direct or
          control you generally or in your performance under this Agreement
          specifically, including in connection with your provision of Rideshare
          Services, your acts or omissions, or your operation and maintenance of
          your vehicle. You retain the sole right to determine when, where, and
          for how long you will utilize the FareShare Platform. FareShare does
          not, and shall not be deemed to, unilaterally prescribe specific
          dates, times of day, or any minimum number of hours for you to utilize
          the FareShare Platform. You retain the option to accept or to decline
          or ignore a Rider’s request for Rideshare Services via the FareShare
          Platform, or to cancel an accepted request for Rideshare Services via
          the FareShare Platform, subject to FareShare’s then-current
          cancellation policies. FareShare does not, and shall not be deemed to,
          require you to accept any specific request for Rideshare Services as a
          condition of maintaining access to the platform. With the exception of
          any signage required by law or permit/license rules or requirements,
          FareShare shall have no right to require you to:
          <ul class="list-item">
            <li>
              display FareShare’s names, logos or colors on your vehicle(s); or
            </li>
            <li>
              wear a uniform or any other clothing displaying FareShare’s names,
              logos or colors.
            </li>
          </ul>
          You acknowledge and agree that you have complete discretion to provide
          Rideshare Services or otherwise engage in any other business or
          employment activities, including but not limited to providing services
          similar to the Rideshare Services to other companies, and that
          FareShare does not, and shall not be deemed to, restrict you from
          engaging in any such activity.
        </div>

        <div class="section-title">20. Third-Party Services</div>
        <div class="content">
          In addition to connecting Riders with Drivers, the FareShare Platform
          may enable Users to provide services or receive services from other
          third parties (“Third-Party Services”). This Agreement between you and
          FareShare governs your use of the FareShare Platform in connection
          with the Third-Party Services. In addition, you understand that the
          Third-Party Services may also be subject to terms and pricing of the
          third-party provider (collectively, the “Third-Party Terms”) which
          will govern your relationship with such third-party provider, as
          applicable. You agree that FareShare is not responsible and may not be
          held liable for the Third-Party Services or the actions or omissions
          of the third-party provider. Such Third-Party Services may not be
          investigated, monitored or checked for accuracy, appropriateness, or
          completeness by FareShare, and FareShare is not responsible for any
          Third-Party Services accessed through the FareShare Platform. In the
          event of a conflict in the terms of any Third-Party Terms and this
          Agreement, the terms of this Agreement shall control with respect to
          FareShare and your agreements with FareShare herein, and the
          limitations of liability set forth in Section 15 above shall also
          apply to the third-party provider. The Dispute Resolution and
          Arbitration Agreement provisions in Section 17 above shall apply
          instead of any terms in any Third-Party Terms for all purposes except
          with respect to claims that are solely against the third-party
          provider.
        </div>

        <div class="section-title">21. General</div>
        <div class="content">
          Except as provided in Section 17, this Agreement shall be governed by
          the laws of the State of Texas without regard to choice of law
          principles. This choice of law provision is only intended to specify
          the use of Texas law to interpret this Agreement and is not intended
          to create any other substantive right to non-Texans to assert claims
          under Texas law whether by statute, common law, or otherwise. If any
          provision of this Agreement is or becomes invalid or non-binding, the
          parties shall remain bound by all other provisions of this Agreement.
          In that event, the parties shall replace the invalid or non-binding
          provision with provisions that are valid and binding and that have, to
          the greatest extent possible, a similar effect as the invalid or
          non-binding provision, given the contents and purpose of this
          Agreement. You agree that this Agreement and all incorporated
          agreements may be automatically assigned by FareShare, in our sole
          discretion by providing notice to you. You may not assign this
          Agreement without FareShare’s prior written approval. Any purported
          assignment by you in violation of this section shall be void. This
          Agreement sets forth the entire understanding and agreement between
          you and FareShare with respect to the subject matter hereof and
          supersedes all previous understandings and agreements between the
          parties, whether oral or written.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
