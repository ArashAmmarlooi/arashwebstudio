import { siteConfig } from "@/lib/site";

/** Verified sender in Resend (domain must be verified). */
export function getResendFromAddress(): string {
  return (
    process.env.RESEND_FROM?.trim() ||
    "Arash Web Studio <hello@arashwebstudio.com>"
  );
}

/** Inbox that receives contact form submissions (must be a real mailbox). */
export function getContactInbox(): string {
  return process.env.CONTACT_INBOX?.trim() || siteConfig.inboxEmail;
}

/**
 * Inbox for replies when mail is sent From @arashwebstudio.com (no mailbox on that address).
 * Contact notifications use the visitor's email as Reply-To so you can answer leads in one click.
 */
export function getResendReplyToInbox(): string {
  return process.env.RESEND_REPLY_TO?.trim() || siteConfig.inboxEmail;
}
