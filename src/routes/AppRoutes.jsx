import AppLayout from "../layouts/AppLayout";
import SettingsLayout from "../layouts/SettingsLayout";
import BankInfo from "../pages/app/BankInfo";
import Bookings from "../pages/app/Bookings";
import CancelledRides from "../pages/app/CancelledRides";
import { Chats } from "../pages/app/Chats";
import CompletedRides from "../pages/app/CompletedRides";
import ContactUs from "../pages/app/ContactUs";
import Home from "../pages/app/Home";
import InvoiceDetails from "../pages/app/InvoiceDetails";
import OngoingRides from "../pages/app/OngoingRides";
import PaymentsInvoice from "../pages/app/PaymentsInvoice";
import PrivacyPolicyPage from "../pages/app/PrivacyPolicyPage";
import Profile from "../pages/app/Profile";
import DriverArrived from "../pages/app/RideBooking/DriverArrived";
import DriverArriving from "../pages/app/RideBooking/DriverArriving";
import PersonalInfo from "../pages/app/RideBooking/PersonalInfo";
import SchdeuleForLater from "../pages/app/RideBooking/ScheduleForLater";
import WhereTo from "../pages/app/RideBooking/WhereTo";
import RideRequests from "../pages/app/RideRequests";
import Settings from "../pages/app/Settings";
import TermsAndConditions from "../pages/app/TermsAndConditions";
import TrackRideDetail from "../pages/app/TrackRideDetail";

export const AppRoutes = [
  {
    title: "Home",
    url: "/home",
    page: <AppLayout page={<Home />} />,
  },
  {
    title: "Chats",
    url: "/chats",
    page: <AppLayout page={<Chats />} />,
  },
  {
    title: "Payments And Invoice",
    url: "/payments-and-invoices",
    page: <AppLayout page={<PaymentsInvoice />} />,
  },
  {
    title: "Payments And Invoice",
    url: "/payments-and-invoices/:id",
    page: <AppLayout page={<InvoiceDetails />} />,
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    page: <AppLayout page={<ContactUs />} />,
  },
  {
    title: "Bookings",
    url: "/bookings",
    page: <AppLayout page={<Bookings />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/new-request/info",
    page: <AppLayout page={<PersonalInfo />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/new-request/where-to",
    page: <AppLayout page={<WhereTo />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/new-request/schedule-for-later",
    page: <AppLayout page={<SchdeuleForLater />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/driver-arriving",
    page: <AppLayout page={<DriverArriving />} />,
  },
  {
    title: "Home",
    url: "/ride/ride-requests",
    page: <AppLayout page={<RideRequests />} />,
  },
  {
    title: "Home",
    url: "/ride/ongoing-rides",
    page: <AppLayout page={<OngoingRides />} />,
  },
  {
    title: "Home",
    url: "/ride/completed-rides",
    page: <AppLayout page={<CompletedRides />} />,
  },
  {
    title: "Home",
    url: "/ride/cancelled-rides",
    page: <AppLayout page={<CancelledRides />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/driver-arrived",
    page: <AppLayout page={<DriverArrived />} />,
  },
  {
    title: "Request a ride",
    url: "/ride/ride-detail/:id",
    page: <AppLayout page={<TrackRideDetail />} />,
  },
  {
    title: "Settings",
    url: "/settings/profile",
    page: <AppLayout page={<SettingsLayout page={<Profile />} />} />,
  },
  // {
  //   title: "Settings",
  //   url: "/settings/bank-info",
  //   page: <AppLayout page={<SettingsLayout page={<BankInfo />} />} />,
  // },
  {
    title: "Settings",
    url: "/settings/notifications",
    page: <AppLayout page={<SettingsLayout page={<Settings />} />} />,
  },
  {
    title: "Settings",
    url: "/terms-and-conditions",
    page: <AppLayout page={<SettingsLayout page={<TermsAndConditions />} />} />,
  },
  {
    title: "Settings",
    url: "/privacy-policy",
    page: <AppLayout page={<SettingsLayout page={<PrivacyPolicyPage />} />} />,
  },
];
