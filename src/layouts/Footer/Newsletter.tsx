'use client';

import { useRef, useState } from 'react';
import { PRODUCTION_SERVER, SITE_KEY } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { BadgeInfo, Check, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsletterProps {
  title: string;
  subTitle?: string;
  btnLabel: string;
  className?: string;
}

export default function Newsletter({
  title,
  subTitle,
  btnLabel,
  className,
}: NewsletterProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  const resetForm = () => {
    formRef.current?.reset();
  };

  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const form = event.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;

    try {
      const res = await fetch(`${PRODUCTION_SERVER}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          sitekey: SITE_KEY,
        },
        body: JSON.stringify({ name, email }),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          description: (
            <div className="flex items-center gap-x-2 font-bold">
              <i className="icon h-5 w-5 bg-success text-white rounded-full p-1">
                <Check />
              </i>
              <span>{result.message}</span>
            </div>
          ),
        });
        resetForm();
      } else {
        setError(true);
        toast({
          description: (
            <div className="flex items-center gap-x-2 font-bold">
              <i className="icon h-5 w-5 text-danger">
                <BadgeInfo />
              </i>
              <span>{result.message || 'Something went wrong.'}</span>
            </div>
          ),
        });
      }
    } catch (err: any) {
      setError(true);
      toast({
        description: (
          <div className="flex items-center gap-x-2 font-bold">
            <i className="icon h-5 w-5 text-danger">
              <BadgeInfo />
            </i>
            <span>{err.message || 'Network error.'}</span>
          </div>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn('newsletter', className)}>
      <div className=" leading-[1]">
        <h3
          className="uppercase mb-1 font-semibold text-white/85 text-[1.25rem] font-secondary"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subTitle && (
          <p className=" tracking-wide leading-[1.4] text-base pt-1.5 text-white/70">
            {subTitle}
          </p>
        )}
      </div>

      <form
        ref={formRef}
        onSubmit={subscribe}
        id="newsletter-form"
        className="mt-6 flex flex-col overflow-hidden space-y-3">
        <div className="form-group bg-white/90 rounded-lg">
          <label
            htmlFor="name"
            hidden>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full Name*"
            className="form-control outline-none w-full py-2 px-3 bg-transparent font-normal border-0 text-body placeholder:text-muted  placeholder:text-base"
          />
        </div>

        <div className="form-group bg-white/90 rounded-lg">
          <label
            htmlFor="email"
            hidden>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address*"
            className="form-control outline-none w-full py-2 px-3 bg-transparent font-normal border-0 text-body placeholder:text-muted placeholder:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className=" bg-primary text-white text-sm md:text-base  uppercase py-2  border-0 items-center font-medium rounded-lg">
          {loading ? 'Submitting...' : btnLabel}
        </button>
      </form>
    </div>
  );
}
