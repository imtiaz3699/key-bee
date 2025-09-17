import React, { useMemo, useRef, useState } from "react";
import { Select, Spin } from "antd";

/**
 * AntSelect
 * Props:
 * - value: string | string[]
 * - onChange: (val) => void
 * - options: { label: string; value: string }[]  // optional (static options)
 * - fetchOptions: (query: string) => Promise<{label:string; value:string}[]> // optional (async search)
 * - mode: "multiple" | "tags" | undefined
 * - placeholder: string
 * - label: string
 * - error: string
 * - allowClear: boolean
 * - disabled: boolean
 * - className: string
 * - debounceMs: number (default 400)
 */
export default function AntSelect({
  value,
  onChange,
  options,
  fetchOptions,
  mode,
  placeholder = "Select...",
  label,
  error,
  allowClear = true,
  disabled = false,
  className = "",
  debounceMs = 400,
}) {
  const [loading, setLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState([]);
  const latestQuery = useRef("");

  const debouncedSearch = useMemo(() => {
    let timer;
    return (q) => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        if (!fetchOptions) return;
        latestQuery.current = q;
        setLoading(true);
        try {
          const res = await fetchOptions(q);
          // Avoid race condition: ensure this is the latest query
          if (latestQuery.current === q) setAsyncOptions(res || []);
        } catch (e) {
          // swallow or log as needed
          setAsyncOptions([]);
        } finally {
          if (latestQuery.current === q) setLoading(false);
        }
      }, debounceMs);
    };
  }, [fetchOptions, debounceMs]);

  const isAsync = typeof fetchOptions === "function";
  const defaultOptions = { label: "Today", value: "Today" }
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label ? (
        <label className="text-sm font-medium text-[#151515]">{label}</label>
      ) : null}

      <Select
        showSearch={isAsync || undefined}
        filterOption={
          isAsync
            ? false
            : (input, option) =>
                String(option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
        }
        onSearch={isAsync ? debouncedSearch : undefined}
        options={isAsync ? asyncOptions : options ? options : [defaultOptions]}
        value={value}
        onChange={onChange}
        mode={mode}
        placeholder={placeholder}
        allowClear={allowClear}
        disabled={disabled}
        loading={loading}
        notFoundContent={loading ? <Spin size="small" /> : null}
        style={{ width: "100%" }}
      />

      {error ? <p className="text-xs text-red-600 mt-1">{error}</p> : null}
    </div>
  );
}
