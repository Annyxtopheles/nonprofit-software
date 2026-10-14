import { SiteLayout } from "@/components/layout/SiteLayout";
import { FileText, Scale, Users, Code, AlertTriangle, Gavel, Mail } from "lucide-react";

const Terms = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-primary mb-3">Terms of Service</p>
        <h1 className="mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: January 2026
        </p>

        <div className="space-y-10">
          {/* Acceptance */}
          <div className="document-card text-center">
            <FileText className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using NonProfitAI, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the platform. These terms apply 
              to both the hosted service and self-hosted installations.
            </p>
          </div>

          {/* Description of Service */}
          <div>
            <Scale className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Description of Service</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                NonProfitAI is an AI-powered board governance platform designed for nonprofit organizations. 
                The platform provides tools for meeting management, document handling, voting, task tracking, 
                and AI-assisted governance features.
              </p>
              <p className="leading-relaxed">
                The platform is available as both a hosted service and for self-hosted deployment.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div>
            <Users className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">As a user of NonProfitAI, you agree to:</p>
              <ul className="space-y-3 max-w-xl mx-auto">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the platform only for lawful purposes related to board governance</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not attempt to gain unauthorized access to the platform or other users&apos; data</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <Code className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Your Content:</strong> You retain full ownership 
                of all documents, data, and content you upload to the platform. We do not claim any 
                intellectual property rights over your board materials.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Trademarks:</strong> The NonProfitAI name, logo, 
                and branding are trademarks of CollabAI Software and may not be used without permission.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="document-card text-center bg-destructive/5 border-destructive/20">
            <AlertTriangle className="w-7 h-7 text-destructive mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-3">Disclaimers</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">AS-IS BASIS:</strong> NonProfitAI is provided 
                &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. 
                This includes, but is not limited to, implied warranties of merchantability, fitness 
                for a particular purpose, and non-infringement.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">AI LIMITATIONS:</strong> The AI features are 
                designed to assist with board governance but should not replace professional legal, 
                financial, or governance advice. Always verify AI-generated summaries and recommendations.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">SELF-HOSTED INSTANCES:</strong> If you choose 
                to self-host NonProfitAI, you are solely responsible for installation, configuration, 
                security, and maintenance. We provide no warranty or support for self-hosted deployments 
                unless under a separate support agreement.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <Gavel className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, NonProfitAI, CollabAI Software, and 
                its contributors shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
              <p className="leading-relaxed">
                Our total liability for any claims arising from your use of the platform shall not exceed 
                the amount you paid for the service (if any) during the twelve months preceding the claim.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <Scale className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising from these terms shall be 
              resolved through good-faith negotiation before pursuing formal legal action.
            </p>
          </div>

          {/* Modifications */}
          <div>
            <FileText className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted 
              on this page with an updated &quot;Last Updated&quot; date. Your continued use of the platform after 
              changes are posted constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <Mail className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <h2 className="text-xl font-semibold mb-4">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please{" "}
              <a 
                href="https://collabai.software/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                contact us
              </a>
              . We&apos;re happy to clarify any provisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Terms;
