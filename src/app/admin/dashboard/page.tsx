export const dynamic = "force-dynamic";

import { db, isDbConfigured } from "@/lib/db";
import { DemoStatusSelect } from "./DemoStatusSelect";
import LogoutButton from "./LogoutButton";

interface DemoRequest {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  revenue: string | null;
  pain_point: string | null;
  status: "new" | "contacted" | "demo_scheduled" | "closed";
  created_at: string;
}

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

async function getData() {
  if (!isDbConfigured()) {
    return { demos: [], contacts: [] };
  }

  const [demosResult, contactsResult] = await Promise.all([
    db.query<DemoRequest>(
      `SELECT id, first_name, last_name, email, company, revenue, pain_point, status, created_at
       FROM demo_requests ORDER BY created_at DESC`
    ),
    db.query<ContactSubmission>(
      `SELECT id, name, email, message, created_at
       FROM contact_submissions ORDER BY created_at DESC`
    ),
  ]);

  return {
    demos: demosResult.rows,
    contacts: contactsResult.rows,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AdminDashboard() {
  const { demos, contacts } = await getData();
  const dbConfigured = isDbConfigured();

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-lg">Jake Admin</h1>
          <p className="text-slate-500 text-xs">Lead Management</p>
        </div>
        <LogoutButton />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-1">Demo Requests</p>
            <p className="text-white text-2xl font-bold">{demos.length}</p>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-1">New Leads</p>
            <p className="text-white text-2xl font-bold">
              {demos.filter((d) => d.status === "new").length}
            </p>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-1">Contact Messages</p>
            <p className="text-white text-2xl font-bold">{contacts.length}</p>
          </div>
        </div>

        {!dbConfigured && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
            Database not configured. Set POSTGRES_URL in environment variables and open Azure firewall to see leads.
          </div>
        )}

        {/* Demo Requests Table */}
        <div className="mb-10">
          <h2 className="text-white font-semibold text-base mb-3">
            Demo Requests
            <span className="ml-2 text-xs text-slate-500 font-normal">({demos.length})</span>
          </h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Date</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Name</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Company</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Revenue</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Email</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Pain Point</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {demos.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-slate-500 text-xs">
                        No demo requests yet
                      </td>
                    </tr>
                  ) : (
                    demos.map((demo) => (
                      <tr key={demo.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                          {formatDate(demo.created_at)}
                        </td>
                        <td className="px-4 py-3 text-white font-medium whitespace-nowrap">
                          {demo.first_name} {demo.last_name}
                        </td>
                        <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{demo.company}</td>
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                          {demo.revenue ?? "—"}
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${demo.email}`}
                            className="text-blue-400 hover:text-blue-300 text-xs"
                          >
                            {demo.email}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-xs max-w-xs">
                          {demo.pain_point
                            ? demo.pain_point.length > 80
                              ? demo.pain_point.slice(0, 80) + "…"
                              : demo.pain_point
                            : "—"}
                        </td>
                        <td className="px-4 py-3">
                          <DemoStatusSelect id={demo.id} initialStatus={demo.status} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact Messages Table */}
        <div>
          <h2 className="text-white font-semibold text-base mb-3">
            Contact Messages
            <span className="ml-2 text-xs text-slate-500 font-normal">({contacts.length})</span>
          </h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Date</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Name</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Email</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-medium text-xs">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-slate-500 text-xs">
                        No contact messages yet
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                          {formatDate(contact.created_at)}
                        </td>
                        <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{contact.name}</td>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-400 hover:text-blue-300 text-xs"
                          >
                            {contact.email}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-xs max-w-sm">
                          {contact.message.length > 100
                            ? contact.message.slice(0, 100) + "…"
                            : contact.message}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
