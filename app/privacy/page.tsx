import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

const LAST_UPDATED = "21 October 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Eligent AI collects, uses, stores and deletes personal data across its website, AI customer support assistant and AI front desk, including WhatsApp, Telegram and website chat.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Eligent AI",
    url: "https://eligentai.com/privacy",
    type: "website",
    siteName: "Eligent AI",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <BlogLayout>
      <section className="blog-page relative pt-28 pb-20">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "#22D3EE" }} />
              <span
                className="text-[12px] font-medium tracking-widest uppercase"
                style={{ color: "#22D3EE" }}
              >
                Legal
              </span>
            </div>
            <h1
              className="blog-heading font-bold text-[32px] sm:text-[44px] leading-[1.15] mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          <article className="blog-prose">
            <p className="lead">
              This policy explains what personal data Eligent AI collects, why we
              collect it, who we share it with, how long we keep it, and how you can
              ask us to delete it.
            </p>

            <h2>Who we are</h2>
            <p>
              Eligent AI is a proprietorship registered in India under the Udyam
              (MSME) scheme and run by Shadab Khan from Lucknow, Uttar Pradesh. We
              build and operate AI software for businesses, including:
            </p>
            <ul>
              <li>
                <strong>AI customer support assistant:</strong> a chat assistant a
                business adds to its website to answer its customers&apos; questions.
              </li>
              <li>
                <strong>AI front desk:</strong> an assistant for clinics and hospitals
                that answers patient questions and takes appointment requests through
                website chat, WhatsApp and Telegram.
              </li>
              <li>
                <strong>Dashboards</strong> that our client businesses use to read
                conversations, reply to customers and manage appointments.
              </li>
            </ul>
            <p>
              Contact: <a href="mailto:contact@eligentai.com">contact@eligentai.com</a>
            </p>

            <h2>Our role: whose data this is</h2>
            <p>
              When you chat with a clinic or business that uses our software, that
              business decides what to collect and how to use it. We process the data
              on its behalf and on its instructions, to provide the service. For your
              own conversations, the business you contacted is your first point of
              contact, and you can also contact us directly.
            </p>
            <p>
              For visitors to eligentai.com and for our own clients, Eligent AI
              decides how the data is used.
            </p>

            <h2>What we collect</h2>
            <h3>When you message a business through our assistant</h3>
            <p>This applies to website chat, WhatsApp and Telegram.</p>
            <ul>
              <li>
                The messages you send and the replies you receive, including any
                staff replies.
              </li>
              <li>
                Your name, and your phone number or chat identifier. On WhatsApp this
                includes your WhatsApp phone number and profile name. On Telegram it
                includes your chat ID and display name.
              </li>
              <li>An email address, if you choose to give one.</li>
              <li>
                Appointment details you provide, such as the department, doctor,
                preferred date and time, and any notes.
              </li>
              <li>
                Your replies to appointment reminders, for example confirming or
                cancelling.
              </li>
              <li>
                Delivery information from the messaging platform, such as message IDs
                and timestamps.
              </li>
            </ul>
            <p>
              Please don&apos;t send medical records, test reports or payment details
              in chat. The assistant can&apos;t read photos, voice notes or files; it
              records only that one was sent. It does not give medical advice and
              can&apos;t replace a doctor.
            </p>

            <h3>From the businesses that use our service</h3>
            <ul>
              <li>Staff names, email addresses, roles and hashed passwords.</li>
              <li>
                Business details, such as name, address and contact numbers, and the
                content they upload to their knowledge base.
              </li>
              <li>
                Doctor names, departments and working hours, for clinics that use
                appointment booking.
              </li>
            </ul>

            <h3>From visitors to eligentai.com</h3>
            <p>
              Anything you send us yourself, such as your email or WhatsApp
              messages. The chat widget stores a session token in your browser so a
              conversation survives a page reload. We use technical information like
              your IP address briefly to prevent abuse. We don&apos;t use advertising
              trackers.
            </p>

            <h2>How we use it</h2>
            <ul>
              <li>To answer your questions using the business&apos;s own information.</li>
              <li>
                To take appointment requests, pass them to the business&apos;s staff,
                and send you confirmations and reminders.
              </li>
              <li>To let staff read and reply to your conversation.</li>
              <li>
                To alert staff when a conversation needs a person, for example an
                urgent message or a request to speak to someone.
              </li>
              <li>To keep the service secure, prevent abuse and fix problems.</li>
            </ul>
            <p>
              We do not sell personal data, use it for advertising, or use your
              messages to train AI models. We use WhatsApp data only to provide the
              conversation you started, in line with Meta&apos;s WhatsApp Business
              policies.
            </p>

            <h2>Who we share it with</h2>
            <p>
              We share data only with the business you contacted, and with service
              providers that help us run the service:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms (WhatsApp Business Platform)</strong>, to send
                and receive WhatsApp messages.
              </li>
              <li>
                <strong>Telegram</strong>, to send and receive Telegram messages.
              </li>
              <li>
                <strong>OpenAI</strong>, to generate the assistant&apos;s replies. Under
                OpenAI&apos;s API terms, data sent through its API is not used to train
                its models by default.
              </li>
              <li>
                <strong>Resend</strong>, to send appointment and notification emails.
              </li>
              <li>
                <strong>Neon, Railway, Vercel and Cloudflare</strong>, for database
                storage, application hosting and secure network delivery.
              </li>
            </ul>
            <p>
              We may also disclose data where the law requires it, or to protect
              someone&apos;s safety.
            </p>

            <h2>Where your data is stored</h2>
            <p>
              Our database and servers are hosted with the providers above, mainly in
              the United States. Your data may therefore be processed outside India.
              It is protected as described below wherever it is stored.
            </p>

            <h2>How we protect it</h2>
            <ul>
              <li>All connections to our service are encrypted (HTTPS).</li>
              <li>
                Each business can see only its own conversations and records.
              </li>
              <li>Staff access is controlled by roles, and passwords are hashed.</li>
              <li>
                Messages from WhatsApp are checked to confirm they came from Meta.
              </li>
            </ul>
            <p>
              No system is perfectly secure. If a breach affects your data, we will
              inform the business concerned and, where the law requires, you and the
              authorities.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep conversation and appointment data for as long as the business
              you contacted uses our service, so its staff can look back at your
              history. We delete it sooner if you or the business asks us to. When a
              business stops using our service, we delete its data on request.
            </p>

            <h2 id="data-deletion">How to delete your data</h2>
            <p>You can ask us to delete your personal data at any time:</p>
            <ol>
              <li>
                Email <a href="mailto:contact@eligentai.com">contact@eligentai.com</a>{" "}
                with the subject <strong>&quot;Data deletion request&quot;</strong>.
              </li>
              <li>
                Include the phone number, WhatsApp number or email address you used,
                and the name of the business you contacted.
              </li>
              <li>
                We may ask you to confirm the request comes from you, for example
                from that same number or email.
              </li>
            </ol>
            <p>
              We will delete your messages, contact details and appointment records
              within 30 days and confirm by email. You can also ask the business you
              contacted, and it will pass the request to us. Where the law requires
              us to keep a record, we keep only what is needed and delete it when
              that obligation ends.
            </p>
            <p>
              To stop receiving WhatsApp messages, block the number in WhatsApp, or
              tell us or the business you contacted.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, including under India&apos;s Digital
              Personal Data Protection Act, 2023, you can ask to see the personal data
              we hold about you, correct it, have it deleted, or withdraw your
              consent. Email{" "}
              <a href="mailto:contact@eligentai.com">contact@eligentai.com</a> and we
              will reply within 30 days. If you are not satisfied with our answer,
              you can complain to the data protection authority in your country.
            </p>

            <h2>Children</h2>
            <p>
              Our service is not meant to be used by children on their own. A parent
              or guardian may contact a clinic on a child&apos;s behalf. If you
              believe a child has given us personal data, contact us and we will
              delete it.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we change this policy, we will update the date at the top of this
              page.
            </p>

            <h2>Contact</h2>
            <p>
              Eligent AI
              <br />
              Lucknow, Uttar Pradesh, India
              <br />
              Email: <a href="mailto:contact@eligentai.com">contact@eligentai.com</a>
            </p>
          </article>
        </div>
      </section>
    </BlogLayout>
  );
}
