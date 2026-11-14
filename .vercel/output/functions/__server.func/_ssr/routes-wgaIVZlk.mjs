import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wgaIVZlk.js
var import_jsx_runtime = require_jsx_runtime();
var assembly_default = {
	schema_version: "1",
	phones: [{
		"id": "founder",
		"role": "founder",
		"app_opened": true,
		"incoming_call_signal": "PHONE_STATE_RINGING",
		"privilege": {
			"production": "shizuku",
			"break_glass": "magisksu_human_gated",
			"injection": "out"
		},
		"container": { "skills": [{
			"name": "seat",
			"skill_md": {
				"steps_only": true,
				"holds_secret": false
			},
			"receipts": {
				"file": "receipts.jsonl",
				"counts_only": true,
				"ok": 0,
				"attempts": 0
			}
		}] },
		"solid": {
			"buddy_mcp": "127.0.0.1:8765",
			"arrowloop": "installed",
			"android_harness": "installed",
			"shizuku": "on"
		},
		"watch": { "held_to_phone": true }
	}, {
		"id": "caller",
		"role": "caller",
		"app_opened": true,
		"incoming_call_signal": "PHONE_STATE_RINGING",
		"privilege": {
			"production": "shizuku",
			"break_glass": "magisksu_human_gated",
			"injection": "out"
		},
		"container": { "skills": [] },
		"watch": { "held_to_phone": false }
	}],
	call: {
		"mode": "rtmp_stream",
		"tl_type": "GroupCall",
		"input": {
			"tl_type": "InputGroupCall",
			"id": null,
			"access_hash": null
		},
		"methods": [
			"phone.createGroupCall",
			"phone.getGroupCallStreamRtmpUrl",
			"phone.joinGroupCall",
			"phone.leaveGroupCall"
		],
		"rtmp": {
			"url_type": "phone.GroupCallStreamRtmpUrl",
			"key_in_export": false
		},
		"participants": [{
			"phone_id": "founder",
			"peer": "founder",
			"muted": false,
			"left": false,
			"video_stopped": false,
			"publisher": true
		}, {
			"phone_id": "caller",
			"peer": "caller",
			"muted": true,
			"left": false,
			"video_stopped": true,
			"publisher": false
		}]
	},
	clerk: {
		"bit": 1,
		"decision": "allow",
		"model_in_decision": false
	},
	route: [
		"app_opened",
		"watch_held_to_phone",
		"clerk_sets_bit",
		"one_publisher_on_rtmp",
		"listeners_join_video_stopped"
	]
};
function Home() {
	const call = assembly_default.call;
	const publisher = call.participants.find((p) => p.publisher);
	const listeners = call.participants.filter((p) => !p.publisher);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen max-w-3xl px-5 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Phone through a group call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-zinc-400",
				children: "The app is open on the phone. Telegram sees a join. The watch and the clerk are not Telegram fields."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-wider text-zinc-500",
					children: "Route"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2",
					children: assembly_default.route.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-zinc-500",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.replaceAll("_", " ") })]
					}, step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-wider text-zinc-500",
						children: "Call"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: [
							call.tl_type,
							" · ",
							call.mode.replaceAll("_", " "),
							" · bit ",
							assembly_default.clerk.bit,
							" · ",
							assembly_default.clerk.decision
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-zinc-400",
						children: [
							"Publisher: ",
							publisher?.phone_id ?? "none",
							". Listeners join with video stopped:",
							" ",
							listeners.map((p) => p.phone_id).join(", ") || "none",
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs text-zinc-500",
						children: call.methods.join(" · ")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-wider text-zinc-500",
					children: "Phones"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: assembly_default.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-medium",
								children: [
									phone.id,
									" · ",
									phone.role
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-zinc-400",
								children: [
									"App opened: ",
									phone.app_opened ? "yes" : "no",
									". Watch held to phone:",
									" ",
									phone.watch.held_to_phone ? "yes" : "no",
									". Signal: ",
									phone.incoming_call_signal,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-zinc-500",
								children: [
									"Production ",
									phone.privilege.production,
									". Injection ",
									phone.privilege.injection,
									". Skills",
									" ",
									phone.container.skills.length,
									"."
								]
							})
						]
					}, phone.id))
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
