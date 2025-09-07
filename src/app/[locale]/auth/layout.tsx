/**
 * @file Layout for the admin dashboard.
 * @module app/(dashboards)/admin/layout
 */

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* <AdminSidebar /> */}
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
}