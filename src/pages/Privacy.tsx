import { SiteLayout } from "@/components/layout/SiteLayout";
import { Link } from "react-router-dom";
import { Shield, Database, Lock, UserCheck, Globe, Mail } from "lucide-react";

const Privacy = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-primary mb-3">Privacy Policy</p>
        <h1 className="mb-4">Your Privacy Matters</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: February 2026
        </p>

        <div className="space-y-10">
          {/* Introduction */}
          <div className="document-card text-center">
            <Shield className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-3">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              NonProfitAI is committed to protecting the privacy of nonprofit organizations and their board members.
              We believe in transparency in how we handle your data.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <Database className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-2">Account Information</h3>
                <p className="leading-relaxed">
                  When you create an account, we collect your email address, name, and organization name. 
                  This information is used to provide you access to the platform and personalize your experience.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Board Documents</h3>
                <p className="leading-relaxed">
                  Documents you upload to the platform (meeting minutes, bylaws, policies) are stored securely 
                  and used solely to power the AI features you request, such as document Q&A and meeting summaries.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Usage Data</h3>
                <p className="leading-relaxed">
                  We collect anonymized usage data to improve the platform. This includes feature usage patterns 
                  and performance metrics—never the content of your documents.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div>
            <UserCheck className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-muted-foreground max-w-xl mx-auto">
              <li>Provide and maintain the NonProfitAI platform services</li>
              <li>Send important notifications about your account and board activities</li>
              <li>Improve and optimize platform performance and features</li>
              <li>Respond to your support requests and inquiries</li>
            </ul>
            <div className="mt-4 p-4 bg-secondary rounded-xl">
              <p className="text-sm font-medium text-foreground">
                We never sell your data to third parties. Your board information remains yours.
              </p>
            </div>
          </div>

          {/* Data Storage & Security */}
          <div>
            <Lock className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Data Storage & Security</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We implement industry-standard security measures including encryption in transit (TLS) 
                and at rest. Access to data is restricted to authorized personnel on a need-to-know basis.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Self-Hosted Option:</strong> For organizations requiring 
                complete data sovereignty, NonProfitAI can be self-hosted on your own infrastructure. 
                In this case, you maintain full control over all data storage and access.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <Globe className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="space-y-2 max-w-xl mx-auto">
                <li><strong className="text-foreground">Access</strong> your personal data and board documents at any time</li>
                <li><strong className="text-foreground">Update</strong> or correct your account information</li>
                <li><strong className="text-foreground">Export</strong> your data in standard formats</li>
                <li><strong className="text-foreground">Delete</strong> your account and associated data</li>
                <li><strong className="text-foreground">Opt-out</strong> of non-essential communications</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <Mail className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Newsletter &amp; Marketing Emails</h2>
            <div className="space-y-4 text-muted-foreground text-left max-w-xl mx-auto">
              <p className="leading-relaxed">
                If you sign up for our newsletter, we collect your email address and, optionally,
                your first name. We use this only to send occasional nonprofit AI insights and
                product updates — never to sell or rent your information.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Email service provider:</strong> we use
                GoHighLevel as a data processor to store subscriber records and deliver these
                emails on our behalf.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Unsubscribing:</strong> every email includes a
                one-click unsubscribe link. You can also opt out at any time on our{" "}
                <Link to="/unsubscribe" className="text-primary hover:underline font-medium">
                  unsubscribe page
                </Link>
                . We keep a minimal record of your opt-out so we don&apos;t email you again.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <Mail className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Questions About Privacy?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please{" "}
              <a 
                href="https://collabai.software/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                contact us
              </a>
              . We&apos;re committed to addressing your concerns promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Privacy;
